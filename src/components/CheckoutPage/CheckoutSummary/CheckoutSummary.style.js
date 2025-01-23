"use client";
import styled from "styled-components";
import Typography from "@/components/Typography";
import { COLORS, MEDIA_QUERIES } from "@/constant";
import Button from "@/components/Button";

export const Wrapper = styled.div`
  padding: 32px 33px;
  border-radius: 8px;
  background-color: ${COLORS["white"]};
  flex: 1;

  ${MEDIA_QUERIES["tablet"]} {
    width: 100%;
  }
`;

export const Header = styled(Typography)`
  margin-bottom: 30px;
`;

export const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  gap: 24px;
  display: flex;
  flex-direction: column;
  margin: 32px 0px;
`;

export const CheckoutText = styled(Typography)`
  color: color-mix(in hsl, ${COLORS["black"]}, transparent);
`;

export const CheckoutCost = styled(Typography)`
  color: ${COLORS["black"]};
`;

export const CheckoutTotal = styled(Typography)`
  color: ${COLORS["orange"]};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const TotalRow = styled(Row)`
  margin-top: 24px;
  margin-bottom: 0;
`;

export const CheckoutButton = styled(Button)`
  width: 100%;
  margin-top: 32px;
`;
