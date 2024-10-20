"use client";
import styled from "styled-components";
import MainWrapper from "../MainWrapper";
import { MEDIA_QUERIES } from "@/constant";

export const NavigationWrapper = styled(MainWrapper)`
  display: flex;
  gap: 30px;
  margin-top: 160px;
  margin-bottom: 160px;

  ${MEDIA_QUERIES["tablet"]} {
    gap: 10px;
    margin-bottom: 120px;
    margin-top: 120px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    flex-direction: column;
    gap: 46px;
  }
`;

export const NavigationItem = styled.div`
  flex-basis: 33%;
`;
