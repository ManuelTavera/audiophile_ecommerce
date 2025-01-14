"use client";
import styled from "styled-components";
import Typography from "../Typography";
import { COLORS } from "@/constant";
import MainWrapper from "../MainWrapper";

export const Wrapper = styled.main`
  background-color: ${COLORS["gray"]};
  padding-top: 80px;
  padding-bottom: 140px;
`;

export const BackWrapper = styled(MainWrapper)`
  margin-bottom: 40px;
`;

export const SubWrapper = styled(MainWrapper)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BackText = styled(Typography)`
  --color: color-mix(in hsl, ${COLORS["black"]}, transparent);
  text-decoration: none;

  &:hover {
    --color: ${COLORS["orange"]};
  }
`;
