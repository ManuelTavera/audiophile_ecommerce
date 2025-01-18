"use client";
import styled from "styled-components";
import Typography from "@/components/Typography";
import { COLORS, MEDIA_QUERIES } from "@/constant";

export const Wrapper = styled.div`
  padding: 54px 48px 48px 48px;
  flex: 0 1 65%;
  background-color: ${COLORS["white"]};
  border-radius: 8px;

  ${MEDIA_QUERIES["tablet"]} {
    width: 100%;
    padding: 30px 28px;
  }
`;

export const Header = styled(Typography)`
  margin-bottom: 41px;

  ${MEDIA_QUERIES["mobile"]} {
    margin-bottom: 32px;
  }
`;

export const Subheader = styled(Typography)`
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px 16px;
  flex-wrap: wrap;

  ${MEDIA_QUERIES["mobile"]} {
    flex-direction: column;
  }
`;

export const CashText = styled(Typography)`
  color: color-mix(in hsl, ${COLORS["black"]}, transparent);
  flex: 1;
`;

export const BillingRow = styled(Row)`
  margin-bottom: 53px;

  ${MEDIA_QUERIES["mobile"]} {
    margin-bottom: 32px;
  }
`;

export const ShippingRow = styled(Row)`
  margin-bottom: 61px;

  ${MEDIA_QUERIES["mobile"]} {
    margin-bottom: 32px;
  }
`;

export const PaymentRow = styled(Row)``;

export const CashRow = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 30px;
  align-items: center;
`;

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

  ${MEDIA_QUERIES["mobile"]} {
    flex-basis: 100%;
  }
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
