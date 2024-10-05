"use client";
import { COLORS, MEDIA_QUERIES } from "@/constant";
import MainWrapper from "@/components/MainWrapper";
import Typography from "../Typography";
import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: ${COLORS["white"]};
`;

export const HeroSection = styled.section`
  position: relative;
  background-color: ${COLORS["darkLight"]};
  height: 729px;

  ${MEDIA_QUERIES["mobile"]} {
    height: 600px;
  }
`;

export const HeroWrapper = styled(MainWrapper)`
  display: flex;
  align-items: center;
  height: 100%;

  ${MEDIA_QUERIES["tablet"]} {
    justify-content: center;
  }
`;

export const ProductSection = styled.section``;

export const NavigationWrapper = styled(MainWrapper)`
  display: flex;
  gap: 30px;
  margin-top: 150px;
  margin-bottom: 160px;

  ${MEDIA_QUERIES["tablet"]} {
    gap: 10px;
    margin-bottom: 96px;
    margin-top: 126px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    flex-direction: column;
    margin-top: 70px;
    margin-bottom: 120px;
    gap: 46px;
  }
`;

export const NavigationItem = styled.div`
  flex-basis: 33%;
`;

export const ProductTitle = styled(Typography)`
  --color: color-mix(in hsl, ${COLORS["white"]} 49.64%, transparent);
  margin-bottom: 24px;
`;

export const Headline = styled(Typography)`
  --color: ${COLORS["white"]};
  margin-bottom: 24px;

  ${MEDIA_QUERIES["tablet"]} {
    text-align: center;
  }

  ${MEDIA_QUERIES["mobile"]} {
    --fontSize: ${36 / 16}rem;
    --lineHeight: ${40 / 16}rem;
    --letterSpacing: ${1.29 / 16}rem;
  }
`;

export const Copy = styled(Typography)`
  --color: color-mix(in hsl, ${COLORS["white"]} 75%, transparent);
  margin-bottom: 40px;

  ${MEDIA_QUERIES["tablet"]} {
    text-align: center;
  }
`;

export const Information = styled.div`
  position: relative;

  ${MEDIA_QUERIES["tablet"]} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const BackgroundImage = styled.figure`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/images/image-hero.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  ${MEDIA_QUERIES["tablet"]} {
    background-image: url("/images/image-header.jpg");
  }

  ${MEDIA_QUERIES["mobile"]} {
    background-image: url("/images/image-header-mobile.jpg");
  }
`;
