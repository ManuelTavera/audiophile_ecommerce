"use client";
import React from "react";

import { Wrapper } from "./Header.style";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { BREAKPOINTS } from "@/constant";
import useMediaQuery from "@/hooks/use-media-query";

function Header() {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS["tablet"]}px)`);

  return (
    <Wrapper>
      {isMobile && <MobileHeader />}
      {!isMobile && <DesktopHeader />}
    </Wrapper>
  );
}

export default Header;
