"use client";
import styled from "styled-components";
import Typography from "@/components/Typography";
import { COLORS, MEDIA_QUERIES } from "@/constant";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ $reverseLayout }) =>
    $reverseLayout ? "row-reverse" : "row"};
  gap: 125px;

  ${MEDIA_QUERIES["tablet"]} {
    flex-direction: column;
    gap: 52px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    gap: 32px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 1 540px;
  overflow: hidden;
  border-radius: 8px;

  ${MEDIA_QUERIES["tablet"]} {
    flex: 0 1 352px;
  }
`;

export const Information = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${MEDIA_QUERIES["tablet"]} {
    align-items: center;
    padding-left: 58px;
    padding-right: 58px;
  }

  ${MEDIA_QUERIES["tablet"]} {
    padding: 0;
  }
`;

export const Header = styled(Typography)`
  margin-bottom: 32px;

  ${MEDIA_QUERIES["tablet"]} {
    width: min-content;
    text-align: center;
  }

  ${MEDIA_QUERIES["mobile"]} {
    --fontSize: ${28 / 16}rem;
    --lineHeight: auto;
    --letterSpacing: ${1 / 16}rem;
    margin-bottom: 24px;
  }
`;

export const Paragraph = styled(Typography)`
  margin-bottom: 40px;
  --color: color-mix(in hsl, ${COLORS["black"]}, transparent);

  ${MEDIA_QUERIES["tablet"]} {
    margin-bottom: 24px;
    text-align: center;
  }
`;

export const Subheader = styled(Typography)`
  margin-bottom: 16px;
  
  ${MEDIA_QUERIES["mobile"]} {
    margin-bottom: 24px;
  }
`;

export const Picture = styled.picture`
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
