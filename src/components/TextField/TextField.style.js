"use client";
import { COLORS } from "@/constant";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const Label = styled.label`
  font-size: ${12 / 16}rem;
  color: ${COLORS["black"]};
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: ${-0.21 / 16}rem;
`;

export const TextRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  padding: 19px 24px;
  font-size: ${14 / 16}rem;
  letter-spacing: ${-0.25 / 16}rem;
  border-radius: 8px;
  border: 1px solid ${COLORS["gray"]};
  font-weight: bold;
  color: ${COLORS["black"]};
  caret-color: ${COLORS["orange"]};

  &::placeholder {
    color: color-mix(in hsl, ${COLORS["black"]}, transparent 40%);
  }

  &:focus {
    outline: none;
    border: 1px solid ${COLORS["orange"]};
  }

  &:invalid {
    outline: none;
    border: 2px solid ${COLORS["red"]};
  }
`;

export const ErrorMessage = styled.p`
  color: ${COLORS["red"]};
  font-size: ${12 / 16}rem;
  font-weight: 500;
  letter-spacing: ${-0.21 / 16}rem;
`;
