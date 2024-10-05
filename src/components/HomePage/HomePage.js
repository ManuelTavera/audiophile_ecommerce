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
} from "./HomePage.style";
import ProductButton from "../ProductButton";
import { NAVIGATION_LINKS_WITHOUT_HOME } from "@/constant";
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
      </ProductSection>
    </Wrapper>
  );
}

export default HomePage;
