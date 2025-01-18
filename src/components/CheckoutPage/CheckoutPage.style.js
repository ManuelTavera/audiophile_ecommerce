"use client";
import styled from "styled-components";
import Typography from "../Typography";
import { COLORS, MEDIA_QUERIES } from "@/constant";
import MainWrapper from "../MainWrapper";

export const Wrapper = styled.main`
  background-color: ${COLORS["gray"]};
  padding-top: 80px;
  padding-bottom: 140px;

  ${MEDIA_QUERIES["tablet"]} {
    padding-bottom: 116px;
    padding-top: 48px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    padding-top: 16px;
  }
`;

export const BackWrapper = styled(MainWrapper)`
  margin-bottom: 40px;

  ${MEDIA_QUERIES["tablet"]} {
    margin-bottom: 24px;
  }
`;

export const SubWrapper = styled(MainWrapper)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;

  ${MEDIA_QUERIES["tablet"]} {
    flex-direction: column;
    gap: 32px;
  }
`;

export const BackText = styled(Typography)`
  --color: color-mix(in hsl, ${COLORS["black"]}, transparent);
  text-decoration: none;

  &:hover {
    --color: ${COLORS["orange"]};
  }
`;
