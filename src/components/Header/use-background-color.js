"use client";
import React from "react";
import { usePathname } from "next/navigation";
import throttle from "lodash.throttle";

import { COLORS } from "@/constant";

export default function () {
  const pathName = usePathname();
  const [color, setColor] = React.useState(() => {
    return pathName === "/" ? COLORS["darkLight"] : COLORS["black"];
  });

  const handleColorChange = (headerHeight, firstMainChildHeight) => {
    if (window.scrollY < Math.abs(headerHeight - firstMainChildHeight)) {
      setColor("transparent");
    } else {
      setColor(COLORS["black"]);
    }
  };

  React.useEffect(() => {
    if (pathName.includes("/details")) {
      setColor(COLORS["black"]);
      return;
    }

    const mainTag = document.getElementsByTagName("main")[0];
    const firstElementInMainSection = mainTag?.firstElementChild;
    const header = document.getElementById("header");

    const handleScrollChange = throttle(
      () =>
        handleColorChange(
          header.offsetHeight,
          firstElementInMainSection.offsetHeight
        ),
      100
    );

    handleColorChange(
      header.offsetHeight,
      firstElementInMainSection.offsetHeight
    );

    window.addEventListener("scroll", handleScrollChange);

    return () => {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, [pathName]);

  return color;
}
