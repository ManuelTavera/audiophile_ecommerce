import React from "react";

import {
  AboutWrapper,
  AboutParagraph,
  AboutTitle,
  Image,
  Highlight,
  AboutInformation,
  ImageWrapper,
} from "./AboutSection.style";
import { BREAKPOINTS } from "@/constant";

function AboutSection() {
  return (
    <AboutWrapper as="section">
      <AboutInformation>
        <AboutTitle forwardedAs={"h2"}>
          Bringing you the <Highlight>best</Highlight> audio gear
        </AboutTitle>
        <AboutParagraph variant="body">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </AboutParagraph>
      </AboutInformation>
      <ImageWrapper>
        <picture>
          <source
            media={`(max-width: ${BREAKPOINTS["mobile"]}px)`}
            srcSet="/images/mobile/image-best-gear.jpg"
          />
          <source
            media={`(max-width: ${BREAKPOINTS["tablet"]}px)`}
            srcSet="/images/tablet/image-best-gear.jpg"
          />
          <Image src="/images/desktop/image-best-gear.jpg" alt="Best gear" />
        </picture>
      </ImageWrapper>
    </AboutWrapper>
  );
}

export default AboutSection;
