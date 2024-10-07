"use client";
import React from "react";

import {
  Wrapper,
  HeroSection,
  ProductTitle,
  Information,
  BackgroundImage,
  Headline,
  Copy,
  HeroWrapper,
  NavigationWrapper,
  NavigationItem,
  ZX9SpeakerWrapper,
  ZX9SpeakerImage,
  ZX9SpeakerInformation,
  ZX9SpeakerBody,
  ZX9SpeakerTitle,
  ZX9SpeakerBtn,
  CirclePattern,
  ZX9SpeakerSubWrapper,
  ZX7SpeakerWrapper,
  ZX7SpeakerSubWrapper,
  ZX7SpeakerInformation,
  YX1EarphonesWrapper,
  YX1EarphoneInformation,
  YX1EarhphoneImage,
  YX1EarhphoneSubWrapper,
  YX1Picture,
} from "./HomePage.style";
import ProductButton from "../ProductButton";
import { NAVIGATION_LINKS_WITHOUT_HOME, BREAKPOINTS } from "@/constant";
import Button from "../Button";
import Typography from "../Typography";

function HomePage() {
  return (
    <Wrapper>
      <HeroSection>
        <BackgroundImage />
        <HeroWrapper>
          <Information>
            <ProductTitle variant={"overline"}>NEW PRODUCT</ProductTitle>
            <Headline forwardedAs={"h1"}>
              XX99 Mark II <br />
              Headphones
            </Headline>
            <Copy variant={"body"}>
              Experience natural, lifelike audio and exceptional <br />
              build quality made for the passionate music <br /> enthusiast.
            </Copy>
            <Button variant="contained">SEE PRODUCT</Button>
          </Information>
        </HeroWrapper>
      </HeroSection>
      <section>
        <NavigationWrapper>
          {NAVIGATION_LINKS_WITHOUT_HOME.map(({ name, image, alt, href }) => (
            <NavigationItem key={name}>
              <ProductButton name={name} image={image} alt={alt} href={href} />
            </NavigationItem>
          ))}
        </NavigationWrapper>
        <ZX9SpeakerWrapper>
          <ZX9SpeakerSubWrapper>
            <CirclePattern
              src="/icon/pattern-circles.svg"
              alt="Circle pattern"
            />
            <picture>
              <source
                media={`(max-width: ${BREAKPOINTS["mobile"]}px)`}
                srcSet="/images/mobile/image-speaker-zx9.png"
              />
              <source
                media={`(max-width: ${BREAKPOINTS["tablet"]}px)`}
                srcSet="/images/tablet/image-speaker-zx9.png"
              />
              <ZX9SpeakerImage
                src="/images/desktop/image-speaker-zx9.png"
                alt="Speaker"
              />
            </picture>
            <ZX9SpeakerInformation>
              <ZX9SpeakerTitle forwardedAs="h1">ZX9 SPEAKER</ZX9SpeakerTitle>
              <ZX9SpeakerBody variant="body">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </ZX9SpeakerBody>
              <ZX9SpeakerBtn variant="contained">SEE PRODUCT</ZX9SpeakerBtn>
            </ZX9SpeakerInformation>
          </ZX9SpeakerSubWrapper>
        </ZX9SpeakerWrapper>
        <ZX7SpeakerWrapper>
          <ZX7SpeakerSubWrapper>
            <ZX7SpeakerInformation>
              <Typography as="h4">ZX7 SPEAKER</Typography>
              <Button variant="outlined">SEE PRODUCT</Button>
            </ZX7SpeakerInformation>
          </ZX7SpeakerSubWrapper>
        </ZX7SpeakerWrapper>
        <YX1EarphonesWrapper>
          <YX1EarhphoneSubWrapper>
            <YX1Picture>
              <source
                media={`(max-width: ${BREAKPOINTS["mobile"]}px)`}
                srcSet="/images/mobile/image-earphones-yx1.jpg"
              />
              <source
                media={`(max-width: ${BREAKPOINTS["tablet"]}px)`}
                srcSet="/images/tablet/image-earphones-yx1.jpg"
              />
              <YX1EarhphoneImage
                src="/images/desktop/image-earphones-yx1.jpg"
                alt="Earphones"
              />
            </YX1Picture>
          </YX1EarhphoneSubWrapper>
          <YX1EarhphoneSubWrapper>
            <YX1EarphoneInformation>
              <Typography as="h4">YX1 EARPHONES</Typography>
              <Button variant="outlined">SEE PRODUCT</Button>
            </YX1EarphoneInformation>
          </YX1EarhphoneSubWrapper>
        </YX1EarphonesWrapper>
      </section>
    </Wrapper>
  );
}

export default HomePage;
