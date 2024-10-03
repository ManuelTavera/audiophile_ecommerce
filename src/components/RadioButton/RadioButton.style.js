"use client";
import styled from "styled-components";
import { COLORS } from "@/constant";

export const Wrapper = styled.label`
  padding: 18px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  border: 1px solid ${COLORS["gray"]};
  border-radius: 8px;

  &:has(> input:checked),
  &:hover {
    border: 1px solid ${COLORS["orange"]};
  }
`;

export const Input = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  &:checked + span {
    &::after {
      content: " ";
      width: 100%;
      height: 100%;
      background-color: ${COLORS["orange"]};
      display: block;
      border-radius: 50%;
    }
  }
`;

export const Circle = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  padding: 5px;
  border: 1px solid ${COLORS["gray"]};
`;

export const Label = styled.span`
  color: ${COLORS["black"]};
  letter-spacing: ${-0.25 / 16}rem;
  font-weight: bold;
`;
