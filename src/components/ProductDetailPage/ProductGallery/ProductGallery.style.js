"use client";
import MainWrapper from "@/components/MainWrapper";
import { MEDIA_QUERIES } from "@/constant";
import styled from "styled-components";

export const Wrapper = styled(MainWrapper)`
  margin-top: 160px;
  display: flex;
  gap: 30px;

  ${MEDIA_QUERIES["tablet"]} {
    gap: 18px;
    margin-top: 120px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    gap: 20px;
    flex-direction: column;
    margin-top: 88px;
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
  height: 100%;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;

  ${MEDIA_QUERIES["tablet"]} {
    gap: 20px;
  }
`;

export const RightColumn = styled.div``;

export const Picture = styled.picture`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
