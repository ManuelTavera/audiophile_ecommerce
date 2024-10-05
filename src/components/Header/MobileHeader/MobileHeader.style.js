"use client";
import { MEDIA_QUERIES } from "@/constant";
import styled from "styled-components";
import MainWrapper from "../../MainWrapper";

export const Wrapper = styled(MainWrapper)`
  display: none;

  ${MEDIA_QUERIES["tablet"]} {
    display: flex;
    align-items: center;
    padding-top: 32px;
    padding-bottom: 32px;
    gap: 42px;
    position: relative;
  }
`;
