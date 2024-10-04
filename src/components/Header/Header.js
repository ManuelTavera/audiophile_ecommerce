import React from "react";

import { Wrapper } from "./Header.style";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function Header() {
  return (
    <Wrapper>
      <DesktopHeader />
      <MobileHeader />
    </Wrapper>
  );
}

export default Header;
