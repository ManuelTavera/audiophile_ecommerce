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
  ProductSection,
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
} from "./HomePage.style";
import ProductButton from "../ProductButton";
import { NAVIGATION_LINKS_WITHOUT_HOME, BREAKPOINTS } from "@/constant";
import Button from "../Button";

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
      <ProductSection>
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
      </ProductSection>
    </Wrapper>
  );
}

export default HomePage;
