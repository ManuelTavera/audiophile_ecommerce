"use client";
import styled from "styled-components";
import { COLORS } from "@/constant";

export const Wrapper = styled.div`
  background-color: ${COLORS["darkGray"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  color: ${COLORS["black"]};
  font-size: ${13 / 16}rem;
  font-weight: bold;
  letter-spacing: ${1 / 16}rem;
`;

export const ControlButton = styled.button`
  color: color-mix(in hsl, ${COLORS["black"]}, transparent 25%);
  font-size: ${13 / 16}rem;
  font-weight: bold;
  letter-spacing: ${1 / 16}rem;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${COLORS["orange"]};
  }

  &:disabled {
    color: ${COLORS["gray"]};
    cursor: auto;
  }
`;

export const DeleteButton = styled(ControlButton)`
  &:hover {
    color: ${COLORS["red"]};
  }
`;
