"use client";
import styled from "styled-components";
import Typography from "@/components/Typography";
import { COLORS } from "@/constant";

export const Wrapper = styled.div`
  padding: 54px 48px 48px 48px;
  flex: 0 1 70%;
  background-color: ${COLORS["white"]};
  border-radius: 8px;
`;

export const Header = styled(Typography)`
  margin-bottom: 41px;
`;

export const Subheader = styled(Typography)`
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px 16px;
  flex-wrap: wrap;
`;

export const BillingRow = styled(Row)`
  margin-bottom: 53px;
`;

export const ShippingRow = styled(Row)`
  margin-bottom: 61px;
`;

export const PaymentRow = styled(Row)``;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  flex: 1;
`;

export const InputWrapperHalf = styled.div`
  flex: 0 1 50%;
`;

export const InputWrapperFull = styled.div`
  flex: 0 1 100%;
`;

export const MethodLabel = styled.p`
  font-size: ${12 / 16}rem;
  color: ${COLORS["black"]};
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: ${-0.21 / 16}rem;
  display: block;
`;
