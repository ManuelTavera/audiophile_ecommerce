"use client";
import styled from "styled-components";
import Typography from "../Typography";
import { COLORS, MEDIA_QUERIES } from "@/constant";
import MainWrapper from "../MainWrapper";

export const Wrapper = styled.main`
  background-color: ${COLORS["white"]};
`;

export const SubWrapper = styled(MainWrapper)`
  margin-top: 79px;
  margin-bottom: 56px;

  ${MEDIA_QUERIES["tablet"]} {
    margin-top: 33px;
    margin-bottom: 24px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    margin-top: 16px;
  }
`;

export const BackText = styled(Typography)`
  --color: color-mix(in hsl, ${COLORS["black"]}, transparent);
  text-decoration: none;
`;
