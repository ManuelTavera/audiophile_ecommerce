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

export const AboutParagraph = styled(Typography)`
  --color: color-mix(in hsl, ${COLORS["black"]}, transparent);
`;

export const AboutTitle = styled(Typography)`
  --letterSpacing: ${1.43 / 16}rem;

  ${MEDIA_QUERIES["mobile"]} {
    --fontSize: ${28 / 16}rem;
    --lineHeight: auto;
    --letterSpacing: ${1 / 16}rem;
  }
`;

export const Image = styled.img``;

export const ImageWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 8px;
`;

export const Highlight = styled.span`
  color: ${COLORS["orange"]};
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
