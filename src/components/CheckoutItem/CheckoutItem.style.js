"use client";
import styled from "styled-components";
import Typography from "@/components/Typography";
import { COLORS } from "@/constant";

export const ItemImage = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const ItemWrapper = styled.li`
  display: flex;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 19px;
  overflow: hidden;
`;

export const ItemName = styled(Typography)`
  color: ${COLORS["black"]};
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ItemPrice = styled(Typography)`
  font-weight: bold;
  color: color-mix(in hsl, ${COLORS["black"]}, transparent);
  font-size: ${14 / 16}rem;
`;

export const ItemAmount = styled(Typography)`
  font-weight: bold;
  color: color-mix(in hsl, ${COLORS["black"]}, transparent);
  margin-left: auto;
`;
