"use client";
import styled from "styled-components";
import MainWrapper from "../MainWrapper";
import Typography from "../Typography";
import { COLORS, MEDIA_QUERIES } from "@/constant";

export const AboutWrapper = styled(MainWrapper)`
  display: flex;
  gap: 32px;
  margin-bottom: 200px;

  ${MEDIA_QUERIES["tablet"]} {
    flex-direction: column-reverse;
    gap: 63px;
    margin-bottom: 120px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    flex-direction: column-reverse;
    gap: 40px;
  }
`;

export const AboutTitle = styled(Typography)`
  --letterSpacing: ${1.43 / 16}rem;

  ${MEDIA_QUERIES["mobile"]} {
    --fontSize: ${28 / 16}rem;
    --lineHeight: auto;
    --letterSpacing: ${1 / 16}rem;
  }
`;

export const Highlight = styled.span`
  color: ${COLORS["orange"]};
`;

export const AboutParagraph = styled(Typography)`
  --color: color-mix(in hsl, ${COLORS["black"]}, transparent);
`;

export const AboutInformation = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  & > * {
    padding-right: 95px;
  }

  ${MEDIA_QUERIES["tablet"]} {
    padding: 0 58px;

    & > * {
      padding-right: 0;
      text-align: center;
    }
  }

  ${MEDIA_QUERIES["tablet"]} {
    padding: 0;
  }
`;

export const Image = styled.img``;

export const ImageWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 8px;
`;

export const FooterSection = styled.section`
  background-color: ${COLORS["black"]};
`;

export const FooterWrapper = styled(MainWrapper)`
  position: relative;
  padding-top: 75px;
  padding-bottom: 48px;

  ${MEDIA_QUERIES["tablet"]} {
    padding-top: 60px;
    padding-bottom: 46px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    padding-top: 52px;
    padding-bottom: 38px;
  }
`;

export const LogoWrapper = styled.div``;

export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;

  ${MEDIA_QUERIES["tablet"]} {
    flex-direction: column;
    gap: 32px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    gap: 48px;
    margin-bottom: 48px;
    align-items: center;
  }
`;

export const Logo = styled.img``;

export const FooterNavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 34px;
  padding: 0;
  margin: 0;

  ${MEDIA_QUERIES["mobile"]} {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export const FooterNavLink = styled(Typography)`
  --letterSpacing: ${2 / 16}rem;
  --color: ${COLORS["white"]};

  text-decoration: none;
`;

export const FooterNavItem = styled.li`
  &:hover ${FooterNavLink} {
    --color: ${COLORS["orange"]};
  }
`;

export const FooterAboutDescription = styled(Typography)`
  --color: color-mix(in hsl, ${COLORS["white"]}, transparent);
  flex: 0 1 540px;

  ${MEDIA_QUERIES["tablet"]} {
    flex: 1;
  }

  ${MEDIA_QUERIES["mobile"]} {
    text-align: center;
  }
`;

export const FooterCopyrightText = styled(Typography)`
  --color: color-mix(in hsl, ${COLORS["white"]}, transparent);
`;

export const FooterSocialList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 16px;
  padding: 0;
`;

export const FooterAboutRow = styled(FooterRow)`
  align-items: last baseline;

  ${MEDIA_QUERIES["tablet"]} {
    & ${FooterSocialList} {
      display: none;
    }
  }

  ${MEDIA_QUERIES["mobile"]} {
    align-items: center;
    gap: 48px;
    margin-bottom: 48px;
  }
`;

export const FooterSocialItem = styled.li`
  width: 24px;
  height: 24px;
  color: ${COLORS["white"]};
  cursor: pointer;

  &:hover svg {
    color: ${COLORS["orange"]};
  }

  & a {
    color: currentColor;
  }
`;

export const FooterRowSpecial = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 56px;

  & ${FooterSocialList} {
    display: none;
  }

  ${MEDIA_QUERIES["tablet"]} {
    margin-top: 80px;
    & ${FooterSocialList} {
      display: flex;
    }
  }

  ${MEDIA_QUERIES["mobile"]} {
    margin-top: 48px;
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }
`;

export const Line = styled.hr`
  background-color: ${COLORS["orange"]};
  width: 101px;
  height: 4px;
  position: absolute;
  top: 0;
  left: 25px;
  border: none;

  ${MEDIA_QUERIES["tablet"]} {
    left: 40px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    left: 50%;
    transform: translate(-50%);
  }
`;
