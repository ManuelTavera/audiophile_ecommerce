"use client";
import React from "react";

import { Wrapper } from "./Header.style";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { BREAKPOINTS } from "@/constant";

function Header() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= BREAKPOINTS.tablet) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper>
      {isMobile && <MobileHeader />}
      {!isMobile && <DesktopHeader />}
    </Wrapper>
  );
}

export default Header;
