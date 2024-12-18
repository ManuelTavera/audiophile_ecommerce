"use client";
import React from "react";
import { usePathname } from "next/navigation";

import { Wrapper } from "./Header.style";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { BREAKPOINTS } from "@/constant";
import useMediaQuery from "@/hooks/use-media-query";

import useBackgroundColor from "./use-background-color";

function Header() {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS["tablet"]}px)`);
  const pathName = usePathname();
  const backgroundColor = useBackgroundColor();

  const position = pathName.includes("/details") ? "sticky" : "fixed";

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
