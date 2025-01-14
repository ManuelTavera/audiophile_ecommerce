"use client";
import React from "react";
import { usePathname } from "next/navigation";

import { Wrapper } from "./Header.style";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { BREAKPOINTS } from "@/constant";
import useMediaQuery from "@/hooks/use-media-query";

import useBackgroundColor from "./use-background-color";

const stickyRoutes = ["/details", "/checkout"];

function Header() {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS["tablet"]}px)`);
  const pathName = usePathname();
  const backgroundColor = useBackgroundColor();

  let position = "fixed";

  if (stickyRoutes.some((route) => pathName.includes(route))) {
    position = "sticky";
  }

  return (
    <Wrapper
      style={{ "--position": position, "--backgroundColor": backgroundColor }}
      id="header"
    >
      {isMobile && <MobileHeader />}
      {!isMobile && <DesktopHeader />}
    </Wrapper>
  );
}

export default Header;
