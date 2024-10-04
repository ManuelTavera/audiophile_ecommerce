"use client";
import { COLORS, MEDIA_QUERIES } from "@/constant";
import MainWrapper from "@/components/MainWrapper";
import Typography from "../Typography";
import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  background-color: ${COLORS["darkLight"]};
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 729px;

  ${MEDIA_QUERIES["mobile"]} {
    height: 600px;
  }
`;

export const SubWrapper = styled(MainWrapper)`
  height: 100%;
  display: flex;
  align-items: center;

  ${MEDIA_QUERIES["tablet"]} {
    justify-content: center;
  }

  ${MEDIA_QUERIES["tablet"]} {
    padding-left: 10px;
    padding-right: 10px;
  }
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
