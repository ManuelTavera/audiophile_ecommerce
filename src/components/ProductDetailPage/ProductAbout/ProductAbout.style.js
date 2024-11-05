"use client";
import MainWrapper from "@/components/MainWrapper";
import Typography from "@/components/Typography";
import { COLORS, MEDIA_QUERIES } from "@/constant";
import styled from "styled-components";

export const Wrapper = styled(MainWrapper)`
  display: flex;
  gap: 125px;
  margin-bottom: 160px;

  ${MEDIA_QUERIES["tablet"]} {
    gap: 69px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    flex-direction: column;
    gap: 32px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 1 540px;
  overflow: hidden;
  border-radius: 8px;

  ${MEDIA_QUERIES["tablet"]} {
    flex: 0 1 281px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    flex: 0 1 327px;
  }
`;

export const Picture = styled.picture`
  width: 100%;
  height: 100%;
`;

export const Information = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Subheader = styled(Typography)`
  margin-bottom: 16px;
`;

export const Header = styled(Typography)`
  margin-bottom: 32px;

  ${MEDIA_QUERIES["tablet"]} {
    --fontSize: ${28 / 16}rem;
    --lineHeight: ${32 / 16}rem;
  }
`;

export const Description = styled(Typography)`
  margin-bottom: 32px;
  --color: color-mix(in hsl, ${COLORS["black"]}, transparent);
`;

export const Price = styled(Typography)`
  margin-bottom: 47px;

  ${MEDIA_QUERIES["tablet"]} {
    margin-bottom: 32px;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const CountWrapper = styled.div`
  flex-basis: 120px;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
