"use client";
import React from "react";
import { usePathname } from "next/navigation";
import throttle from "lodash.throttle";

import { COLORS } from "@/constant";

const stickyRoutes = ["/details", "/checkout"];

export default function useBackgroundColor() {
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
    const mainTag = document.getElementsByTagName("main")[0];
    if (!Boolean(mainTag)) {
      return;
    }

    if (stickyRoutes.some((route) => pathName.includes(route))) {
      setColor(COLORS["black"]);
      return;
    }

    const firstElementInMainSection = mainTag?.firstElementChild;
    const header = document.getElementById("header");

    const handleScrollChange = throttle(
      () =>
        handleColorChange(
          header.offsetHeight,
          firstElementInMainSection ? firstElementInMainSection.offsetHeight : 0
        ),
      100
    );

    handleColorChange(
      header.offsetHeight,
      firstElementInMainSection ? firstElementInMainSection.offsetHeight : 0
    );

    window.addEventListener("scroll", handleScrollChange);

    return () => {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, [pathName]);

  return color;
}
