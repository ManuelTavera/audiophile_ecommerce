"use client";
import React from "react";
import { usePathname } from "next/navigation";

import { Wrapper } from "./Header.style";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { BREAKPOINTS, COLORS } from "@/constant";
import useMediaQuery from "@/hooks/use-media-query";

function Header() {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS["tablet"]}px)`);
  const pathName = usePathname();

  const backgroundColor =
    pathName === "/" ? COLORS["darkLight"] : COLORS["black"];

  const position = pathName.includes("/details") ? "sticky" : "fixed";

  return (
    <Wrapper
      style={{ "--backgroundColor": backgroundColor, "--position": position }}
    >
      {isMobile && <MobileHeader />}
      {!isMobile && <DesktopHeader />}
    </Wrapper>
  );
}

export default Header;
