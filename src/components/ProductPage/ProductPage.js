import React from "react";

import {
  Wrapper,
  HeroSection,
  Title,
  HeroWrapper,
} from "./ProductPage.style";

function ProductPage({ children, title }) {
  return (
    <Wrapper>
      <HeroSection>
        <HeroWrapper>
          <Title forwardedAs={"h2"}>{title}</Title>
        </HeroWrapper>
      </HeroSection>
      <section>{children}</section>
    </Wrapper>
  );
}

export default ProductPage;
