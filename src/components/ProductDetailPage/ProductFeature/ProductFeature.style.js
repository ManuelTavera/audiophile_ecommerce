"use client";
import MainWrapper from "@/components/MainWrapper";
import Typography from "@/components/Typography";
import { COLORS, MEDIA_QUERIES } from "@/constant";
import styled from "styled-components";

export const Wrapper = styled(MainWrapper)`
  display: flex;
  gap: 125px;

  ${MEDIA_QUERIES["tablet"]} {
    flex-direction: column;
    gap: 120px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    gap: 88px;
  }
`;

export const FeaturesWrapper = styled.div`
  flex: 1;
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Features = styled(Typography)`
  --color: color-mix(in hsl, ${COLORS["black"]}, transparent);
`;

export const ItemsWrapper = styled.div`
  flex: 0 1 350px;

  ${MEDIA_QUERIES["tablet"]} {
    display: flex;
  }

  ${MEDIA_QUERIES["mobile"]} {
    flex-direction: column;
    flex: 1;
  }
`;

export const Title = styled(Typography)`
  margin-bottom: 32px;

  ${MEDIA_QUERIES["tablet"]} {
    flex: 1;
  }

  ${MEDIA_QUERIES["mobile"]} {
    --fontSize: ${24 / 16}rem;
    --letterSpacing: ${0.86 / 16}rem;
    --lineHeight: ${36 / 16}rem;
    margin-bottom: 24px;
  }
`;

export const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${MEDIA_QUERIES["tablet"]} {
    flex: 1;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 24px;
`;

export const ItemQuantity = styled(Typography)`
  --color: ${COLORS["orange"]};
  min-width: 18px;
`;

export const ItemName = styled(Typography)`
  --color: color-mix(in hsl, ${COLORS["black"]}, transparent);
`;
