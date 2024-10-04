import React from "react";
import Link from "next/link";

import {
  Wrapper,
  LogoWrapper,
  Logo,
  Navigation,
  LinksWrapper,
  IconWrapper,
  Icon,
  LinkText,
  LinksItem,
  SubWrapper,
  Line,
} from "./Header.style";

const NAVIGATION_LINKS = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "HEADPHONES",
    href: "/headphones",
  },
  {
    name: "SPEAKERS",
    href: "/speakers",
  },
  {
    name: "EARPHONES",
    href: "/earphones",
  },
];

function Header() {
  return (
    <Wrapper>
      <SubWrapper as={"div"}>
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
      </SubWrapper>
    </Wrapper>
  );
}

export default Header;
