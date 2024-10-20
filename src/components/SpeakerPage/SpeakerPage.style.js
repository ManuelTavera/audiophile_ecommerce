"use client";
import styled from "styled-components";
import { MEDIA_QUERIES } from "@/constant";
import MainWrapper from "../MainWrapper";

export const ProductSectionWrapper = styled(MainWrapper)`
  margin-bottom: 160px;

  ${MEDIA_QUERIES["tablet"]} {
    margin-bottom: 120px;
  }
`;
