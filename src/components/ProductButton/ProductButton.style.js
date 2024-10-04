"use client";
import styled from "styled-components";
import Typography from "../Typography";
import Button from "../Button";
import { COLORS } from "@/constant";

export const ShopButton = styled(Button)``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${COLORS["darkGray"]};
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    button {
      --color: ${COLORS["lightOrange"]};
    }
  }
`;

export const ImageWrapper = styled.div`
  margin-top: -30px;
`;

export const Image = styled.img`
  max-height: 108px;
`;

export const ProductName = styled(Typography)`
  --fontWeight: bold;
  --letterSpacing: ${1.07 / 16}rem;
`;
