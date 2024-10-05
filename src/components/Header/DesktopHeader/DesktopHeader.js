import React from "react";
import Link from "next/link";

import {
  Navigation,
  LinksWrapper,
  LinkText,
  LinksItem,
  Wrapper,
} from "./DesktopHeader.style";

import { LogoWrapper, Logo, IconWrapper, Icon, Line } from "../Header.style";

import { NAVIGATION_LINKS } from "@/constant";

function DesktopHeader() {
  return (
    <Wrapper as={"div"}>
      <Link href={"/"}>
        <LogoWrapper>
          <Logo src="/icon/logo.svg" alt="Logo" />
        </LogoWrapper>
      </Link>
      <Navigation>
        <LinksWrapper>
          {NAVIGATION_LINKS.map(({ name, href }) => (
            <LinksItem key={name}>
              <Link href={href} passHref legacyBehavior>
                <LinkText variant={"subtitle"} forwardedAs={"a"}>
                  {name}
                </LinkText>
              </Link>
            </LinksItem>
          ))}
        </LinksWrapper>
      </Navigation>
      <IconWrapper>
        <Icon src="/icon/icon-cart.svg" alt="Cart Icon" />
      </IconWrapper>
      <Line />
    </Wrapper>
  );
}

export default DesktopHeader;
