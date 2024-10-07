"use client";
import { COLORS, MEDIA_QUERIES } from "@/constant";
import MainWrapper from "@/components/MainWrapper";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: ${COLORS["white"]};
  margin-bottom: 200px;
`;

export const HeroSection = styled.section`
  position: relative;
  background-color: ${COLORS["darkLight"]};
  height: 729px;

  ${MEDIA_QUERIES["mobile"]} {
    height: 600px;
  }
`;

export const HeroWrapper = styled(MainWrapper)`
  display: flex;
  align-items: center;
  height: 100%;

  ${MEDIA_QUERIES["tablet"]} {
    justify-content: center;
  }
`;

export const NavigationWrapper = styled(MainWrapper)`
  display: flex;
  gap: 30px;
  margin-top: 150px;
  margin-bottom: 160px;

  ${MEDIA_QUERIES["tablet"]} {
    gap: 10px;
    margin-bottom: 96px;
    margin-top: 126px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    flex-direction: column;
    margin-top: 70px;
    margin-bottom: 120px;
    gap: 46px;
  }
`;

export const NavigationItem = styled.div`
  flex-basis: 33%;
`;

export const ProductTitle = styled(Typography)`
  --color: color-mix(in hsl, ${COLORS["white"]} 49.64%, transparent);
  margin-bottom: 24px;
`;

export const Headline = styled(Typography)`
  --color: ${COLORS["white"]};
  margin-bottom: 24px;

  ${MEDIA_QUERIES["tablet"]} {
    text-align: center;
  }

  ${MEDIA_QUERIES["mobile"]} {
    --fontSize: ${36 / 16}rem;
    --lineHeight: ${40 / 16}rem;
    --letterSpacing: ${1.29 / 16}rem;
  }
`;

export const Copy = styled(Typography)`
  --color: color-mix(in hsl, ${COLORS["white"]} 75%, transparent);
  margin-bottom: 40px;

  ${MEDIA_QUERIES["tablet"]} {
    text-align: center;
  }
`;

export const Information = styled.div`
  position: relative;

  ${MEDIA_QUERIES["tablet"]} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const BackgroundImage = styled.figure`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/images/desktop/image-hero.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  ${MEDIA_QUERIES["tablet"]} {
    background-image: url("/images/tablet/image-header.jpg");
  }

  ${MEDIA_QUERIES["mobile"]} {
    background-image: url("/images/mobile/image-header.jpg");
  }
`;

export const ZX9SpeakerWrapper = styled(MainWrapper)`
  height: 560px;
  margin-bottom: 46px;

  ${MEDIA_QUERIES["tablet"]} {
    height: auto;
    margin-bottom: 32px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    margin-bottom: 24px;
  }
`;

export const ZX9SpeakerSubWrapper = styled.div`
  align-items: center;
  justify-content: flex-end;
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100%;
  background-color: ${COLORS["orange"]};
  border-radius: 8px;

  ${MEDIA_QUERIES["tablet"]} {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding-top: 52px;
    padding-bottom: 64px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    padding-top: 55px;
    padding-bottom: 55px;
  }
`;

export const ZX9SpeakerImage = styled.img`
  max-height: 490px;
  position: absolute;
  top: unset;
  bottom: -5%;
  left: 10%;

  ${MEDIA_QUERIES["tablet"]} {
    position: relative;
    max-width: 235px;
    margin-bottom: 64px;
    inset: unset;
  }

  ${MEDIA_QUERIES["mobile"]} {
    max-width: 207px;
    margin-bottom: 32px;
  }
`;

export const CirclePattern = styled.img`
  position: absolute;
  pointer-events: none;
  left: -13%;
  top: -7%;

  ${MEDIA_QUERIES["tablet"]} {
    left: 50%;
    max-width: none;
    transform: translateX(-50%);
    top: auto;
    bottom: 64px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    max-width: 558px;
    bottom: auto;
    top: -15%;
  }
`;

export const ZX9SpeakerInformation = styled.div`
  max-width: 350px;
  margin-right: 95px;

  ${MEDIA_QUERIES["tablet"]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  ${MEDIA_QUERIES["mobile"]} {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const ZX9SpeakerTitle = styled(Typography)`
  --color: ${COLORS["white"]};
  margin-bottom: 24px;

  ${MEDIA_QUERIES["tablet"]} {
    text-align: center;
  }

  ${MEDIA_QUERIES["mobile"]} {
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 1.29px;
    width: min-content;
  }
`;

export const ZX9SpeakerBody = styled(Typography)`
  --color: color-mix(in hsl, ${COLORS["white"]} 75%, transparent);
  margin-bottom: 40px;

  ${MEDIA_QUERIES["tablet"]} {
    text-align: center;
  }

  ${MEDIA_QUERIES["mobile"]} {
    margin-bottom: 24px;
  }
`;

export const ZX9SpeakerBtn = styled(Button)`
  --backgroundColor: ${COLORS["black"]};

  &:hover {
    --backgroundColor: ${COLORS["graySecondary"]};
  }
`;

export const ZX7SpeakerWrapper = styled(MainWrapper)`
  height: 320px;
  margin-bottom: 48px;

  ${MEDIA_QUERIES["tablet"]} {
    margin-bottom: 32px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    margin-bottom: 24px;
  }
`;

export const ZX7SpeakerSubWrapper = styled.div`
  border-radius: 8px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url("/images/desktop/image-speaker-zx7.png");
  height: 100%;
  display: flex;
  align-items: center;

  ${MEDIA_QUERIES["tablet"]} {
    background-image: url("/images/tablet/image-speaker-zx7.png");
  }

  ${MEDIA_QUERIES["mobile"]} {
    background-image: url("/images/mobile/image-speaker-zx7.png");
  }
`;

export const ZX7SpeakerInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  margin-left: 95px;

  ${MEDIA_QUERIES["tablet"]} {
    margin-left: 62px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    margin-left: 24px;
  }
`;

export const YX1EarphonesWrapper = styled(MainWrapper)`
  display: flex;
  justify-content: center;
  gap: 30px;

  ${MEDIA_QUERIES["tablet"]} {
    gap: 11px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    gap: 24px;
    flex-direction: column;
  }
`;

export const YX1EarhphoneSubWrapper = styled.div`
  max-height: 320px;
  border-radius: 8px;
  overflow: hidden;
  flex: 1;

  ${MEDIA_QUERIES["mobile"]} {
    min-height: 200px;
  }
`;

export const YX1EarhphoneImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const YX1EarphoneInformation = styled.div`
  background-color: ${COLORS["darkGray"]};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 95px;
  gap: 32px;

  ${MEDIA_QUERIES["tablet"]} {
    padding-left: 41px;
    padding-right: 41px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    min-height: inherit;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const YX1Picture = styled.picture`
  height: 100%;
`;
