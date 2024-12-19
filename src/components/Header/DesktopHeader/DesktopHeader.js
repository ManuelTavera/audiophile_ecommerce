"use client";
import React from "react";
import Link from "next/link";

import {
  Navigation,
  LinksWrapper,
  LinkText,
  LinksItem,
  Wrapper,
} from "./DesktopHeader.style";

import {
  LogoWrapper,
  Logo,
  IconWrapper,
  Icon,
  Line,
  Badge,
} from "../Header.style";
import { CheckoutTheme } from "@/components/CheckoutProvider";
import CheckoutModal from "@/components/CheckoutModal";

import { NAVIGATION_LINKS } from "@/constant";

function DesktopHeader() {
  const [isClient, setIsClient] = React.useState(false);
  const { itemsCount } = React.useContext(CheckoutTheme);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

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
      <CheckoutModal>
        <IconWrapper>
          <Icon src="/icon/icon-cart.svg" alt="Cart Icon" />
          {itemsCount !== 0 && <Badge>{itemsCount}</Badge>}
        </IconWrapper>
      </CheckoutModal>
      <Line />
    </Wrapper>
  );
}

export default DesktopHeader;
