import React from "react";

import {
  Wrapper,
  SubWrapper,
  ProductTitle,
  Information,
  BackgroundImage,
  Headline,
  Copy,
} from "./HomePage.style";

import Button from "../Button";

function HomePage() {
  return (
    <Wrapper>
      <BackgroundImage />
      <SubWrapper>
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
      </SubWrapper>
    </Wrapper>
  );
}

export default HomePage;
