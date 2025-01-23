"use client";
import styled from "styled-components";
import Typography from "../Typography";
import Button from "../Button";
import * as Dialog from "@radix-ui/react-dialog";
import { COLORS, MEDIA_QUERIES } from "@/constant";

export const Wrapper = styled(Dialog.Root)``;
export const Trigger = styled(Dialog.Trigger)``;
export const Portal = styled(Dialog.Portal)``;
export const Overlay = styled(Dialog.Overlay)`
  background-color: color-mix(in hsl, ${COLORS["black"]} 40%, transparent);
  position: fixed;
  inset: 0;
`;

export const ContentWrapper = styled.div`
  padding: 48px;
  background-color: ${COLORS["white"]};
  border-radius: 8px;
  ${MEDIA_QUERIES["mobile"]} {
    padding: 32px;
  }
`;

export const Content = styled(Dialog.Content)`
  pointer-events: auto;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  min-width: 540px;

  ${MEDIA_QUERIES["mobile"]} {
    pointer-events: auto;
    width: 100%;
    min-width: auto;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const Header = styled(Typography)`
  margin-bottom: 24px;

  ${MEDIA_QUERIES["mobile"]} {
    font-size: ${24 / 16}rem;
    line-height: ${28 / 16}rem;
    margin-bottom: 16px;
  }
`;

export const Subheader = styled(Typography)`
  color: color-mix(in hsl, ${COLORS["black"]}, transparent);
  margin-bottom: 32px;

  ${MEDIA_QUERIES["mobile"]} {
    margin-bottom: 24px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 46px;

  ${MEDIA_QUERIES["mobile"]} {
    flex-direction: column;
    margin-bottom: 24px;
  }
`;

export const ItemWrapper = styled.div`
  flex: 0 1 60%;
  background-color: ${COLORS["darkGray"]};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Line = styled.hr`
  height: 1px;
  background-color: color-mix(in hsl, ${COLORS["black"]} 8%, transparent);
  width: 100%;
  border: none;
`;

export const PriceWrapper = styled.div`
  flex: 0 1 40%;
  background-color: ${COLORS["black"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 32px;
  padding-right: 24px;
  gap: 8px;

  ${MEDIA_QUERIES["mobile"]} {
    padding: 15px 24px;
  }
`;

export const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  max-height: var(--maxHeight, 64px);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ExpandButton = styled.button`
  background: none;
  border: none;
  color: color-mix(in hsl, ${COLORS["black"]}, transparent);
  font-size: ${12 / 16}rem;
  font-weight: bold;
  cursor: pointer;
`;

export const TotalText = styled(Typography)`
  color: color-mix(in hsl, ${COLORS["white"]}, transparent);
`;

export const TotalPrice = styled(Typography)`
  font-size: ${18 / 16}rem;
  color: ${COLORS["white"]};
`;

export const HomeButton = styled(Button)`
  width: 100%;
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${COLORS["orange"]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  ${MEDIA_QUERIES["mobile"]} {
    margin-bottom: 24px;
  }
`;
