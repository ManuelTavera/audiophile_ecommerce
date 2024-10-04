"use client";
import { MEDIA_QUERIES } from "@/constant";
import styled from "styled-components";
import MainWrapper from "../../MainWrapper";

export const Wrapper = styled(MainWrapper)`
  display: none;

  ${MEDIA_QUERIES["tablet"]} {
    display: flex;
    align-items: center;
    padding: 32px 40px;
    gap: 42px;
    position: relative;
  }
`;
