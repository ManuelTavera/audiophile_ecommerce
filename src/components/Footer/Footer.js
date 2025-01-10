import React from "react";
import Link from "next/link";

import {
  FooterSection,
  FooterWrapper,
  LogoWrapper,
  Logo,
  FooterNavList,
  FooterNavItem,
  FooterNavLink,
  FooterRow,
  FooterAboutDescription,
  FooterSocialList,
  FooterSocialItem,
  FooterCopyrightText,
  FooterAboutRow,
  FooterRowSpecial,
  Line,
} from "./Footer.style";
import { NAVIGATION_LINKS } from "@/constant";
import FacebookIcon from "@/public/icon/icon-facebook.svg";
import TwitterIcon from "@/public/icon/icon-twitter.svg";
import InstagramIcon from "@/public/icon/icon-instagram.svg";

const SOCIAL_LINKS = [
  { Icon: FacebookIcon, href: "/", id: "Facebook" },
  { Icon: TwitterIcon, href: "/", id: "Twitter" },
  { Icon: InstagramIcon, href: "/", id: "Instagram" },
];

function Footer() {
  return (
    <footer>
      <FooterSection>
        <FooterWrapper>
          <Line />
          <FooterRow>
            <LogoWrapper>
              <Link href={"/"}>
                <Logo src="/icon/logo.svg" alt="Logo" />
              </Link>
            </LogoWrapper>
            <FooterNavList>
              {NAVIGATION_LINKS.map(({ name, href }) => (
                <FooterNavItem key={name}>
                  <Link href={href} passHref legacyBehavior>
                    <FooterNavLink variant="subtitle" forwardedAs={"a"}>
                      {name}
                    </FooterNavLink>
                  </Link>
                </FooterNavItem>
              ))}
            </FooterNavList>
          </FooterRow>
          <FooterAboutRow>
            <FooterAboutDescription variant="body">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </FooterAboutDescription>
            <FooterSocialList>
              {SOCIAL_LINKS.map(({ Icon, href, id }) => (
                <FooterSocialItem key={id}>
                  <Link href={href}>
                    <Icon />
                  </Link>
                </FooterSocialItem>
              ))}
            </FooterSocialList>
          </FooterAboutRow>
          <FooterRowSpecial>
            <FooterCopyrightText variant="body">
              Copyright 2021. All Rights Reserved
            </FooterCopyrightText>
            <FooterSocialList>
              {SOCIAL_LINKS.map(({ Icon, href, id }) => (
                <FooterSocialItem key={id}>
                  <Link href={href}>
                    <Icon />
                  </Link>
                </FooterSocialItem>
              ))}
            </FooterSocialList>
          </FooterRowSpecial>
        </FooterWrapper>
      </FooterSection>
    </footer>
  );
}

export default Footer;
