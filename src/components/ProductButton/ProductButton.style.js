"use client";
import styled from "styled-components";
import Typography from "../Typography";
import Button from "../Button";
import { COLORS, MEDIA_QUERIES } from "@/constant";

export const ShopButton = styled(Button)``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${COLORS["darkGray"]};
  border-radius: 8px;
  text-decoration: none;
  padding-bottom: 10px;

  &:hover ${ShopButton} {
    --color: ${COLORS["lightOrange"]};
  }

  ${MEDIA_QUERIES["tablet"]} {
    padding-bottom: 0;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: -50px;
  ${MEDIA_QUERIES["tablet"]} {
    margin-top: -30px;
  }
`;

export const Image = styled.img`
  max-height: 160px;
  ${MEDIA_QUERIES["tablet"]} {
    max-height: 108px;
  }
`;

export const ProductName = styled(Typography)`
  --fontWeight: bold;
  --letterSpacing: ${1.07 / 16}rem;
`;
