"use client";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { COLORS } from "@/constant";
import BaseButton from "../Button";
import Typography from "../Typography";

export const Wrapper = styled(Dialog.Root)``;
export const Trigger = styled(Dialog.Trigger)``;
export const Portal = styled(Dialog.Portal)``;
export const Overlay = styled(Dialog.Overlay)`
  background-color: color-mix(in hsl, ${COLORS["black"]} 40%, transparent);
  position: fixed;
  inset: 0;
`;

export const Content = styled(Dialog.Content)`
  pointer-events: auto;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  padding-left: 24px;
  padding-right: 24px;
  width: clamp(327px, 100%, 500px);
`;

export const ContentWrapper = styled.div`
  width: 100%;
  background: white;
  padding: 28px 33px;
  border-radius: 8px;
`;

export const Title = styled(Dialog.Title)``;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 32px;
`;

export const FlexRowBottom = styled(FlexRow)`
  margin-bottom: 24px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: color-mix(in hsl, ${COLORS["black"]}, transparent);
  text-decoration: underline;
  cursor: pointer;
`;

export const ItemsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-height: 300px;
  overflow-y: auto;
`;

export const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
`;

export const CheckoutButton = styled(BaseButton)`
  width: 100%;

  &:disabled {
    background-color: ${COLORS["gray"]};
  }
`;

export const Image = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const Text = styled(Typography)`
  color: color-mix(in hsl, ${COLORS["black"]}, transparent);
  font-weight: bold;
`;

export const Name = styled(Typography)`
  color: ${COLORS["black"]};
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TotalSum = styled.p`
  font-size: ${18 / 16}rem;
  font-weight: bold;
  letter-spacing: 0;
  color: ${COLORS["black"]};
`;

export const Price = styled(Typography)`
  color: color-mix(in hsl, ${COLORS["black"]}, transparent);
  font-weight: bold;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 19px;
  overflow: hidden;
`;

export const NumberWrapper = styled.div`
  min-width: 96px;
  height: 32px;
  margin-left: auto;
`;
