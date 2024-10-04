"use client";
import React from "react";
import Link from "next/link";

import { Wrapper } from "./MobileHeader.style";
import { LogoWrapper, Logo, Icon, IconWrapper, Line } from "../Header.style";
import MobileMenu from "./MobileMenu";

function MobileHeader() {
  const mobileHeaderRef = React.useRef();
  React.useEffect(() => {
    if (mobileHeaderRef.current) {
      let headerHeight = mobileHeaderRef.current.offsetHeight;
      document.documentElement.style.cssText = `--headerHeight: ${headerHeight}px`;
    }
  }, [mobileHeaderRef]);
  return (
    <Wrapper as={"div"} ref={mobileHeaderRef}>
      <MobileMenu mobileHeaderRef={mobileHeaderRef}>
        <IconWrapper>
          <Icon src="/icon/icon-hamburger.svg" alt="Cart Icon" />
        </IconWrapper>
      </MobileMenu>
      <LogoWrapper as={Link} href="/">
        <Logo src="/icon/logo.svg" alt="Logo" />
      </LogoWrapper>
      <IconWrapper>
        <Icon src="/icon/icon-cart.svg" alt="Cart Icon" />
      </IconWrapper>
      <Line />
    </Wrapper>
  );
}

export default MobileHeader;
