"use client";
import styled from "styled-components";
import { COLORS, MEDIA_QUERIES } from "@/constant";
import MainWrapper from "../MainWrapper";
import Typography from "../Typography";

export const Wrapper = styled.main`
  background-color: ${COLORS["white"]};
  margin-bottom: 200px;

  ${MEDIA_QUERIES["tablet"]} {
    margin-bottom: 120px;
  }
`;

export const HeroSection = styled.section`
  background-color: ${COLORS["black"]};
  height: 336px;
  margin-bottom: 160px;

  ${MEDIA_QUERIES["tablet"]} {
    margin-bottom: 120px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    height: 192px;
    margin-bottom: 64px;
  }
`;

export const HeroWrapper = styled(MainWrapper)`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled(Typography)`
  --color: ${COLORS["white"]};
  margin-top: auto;
  margin-bottom: 98px;

  ${MEDIA_QUERIES["mobile"]} {
    --fontSize: ${28 / 16}rem;
    --lineHeight: auto;
    --letterSpacing: ${2 / 16}rem;
  }

  ${MEDIA_QUERIES["mobile"]} {
    margin-bottom: 32px;
  }
`;