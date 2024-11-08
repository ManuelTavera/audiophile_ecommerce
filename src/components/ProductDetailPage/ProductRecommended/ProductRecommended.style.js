"use client";
import MainWrapper from "@/components/MainWrapper";
import Typography from "@/components/Typography";
import { MEDIA_QUERIES } from "@/constant";
import styled from "styled-components";

export const Wrapper = styled(MainWrapper)`
  margin-top: 160px;

  ${MEDIA_QUERIES["tablet"]} {
    margin-top: 120px;
  }
`;

export const ProductTitle = styled(Typography)``;

export const ProductWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex: 0 1 33%;
  text-decoration: none;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
`;

export const ProductList = styled.div`
  display: flex;
  gap: 30px;

  ${MEDIA_QUERIES["tablet"]} {
    gap: 12px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    flex-direction: column;
    gap: 56px;
  }
`;

export const Heading = styled(Typography)`
  text-align: center;
  margin-bottom: 64px;

  ${MEDIA_QUERIES["tablet"]} {
    margin-bottom: 56px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    margin-bottom: 40px;
    --fontSize: ${24 / 16}rem;
  }
`;

export const Picture = styled.picture`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
