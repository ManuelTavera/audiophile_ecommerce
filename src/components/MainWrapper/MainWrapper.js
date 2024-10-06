"use client";
import { MEDIA_QUERIES } from "@/constant";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;

  padding-left: 25px;
  padding-right: 25px;

  ${MEDIA_QUERIES["tablet"]} {
    padding-left: 40px;
    padding-right: 40px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export default MainWrapper;
