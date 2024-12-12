import React from "react";

import {
  Wrapper,
  FeatureList,
  FeaturesWrapper,
  Features,
  Item,
  ItemList,
  ItemsWrapper,
  Title,
  ItemQuantity,
  ItemName,
} from "./ProductFeature.style";

function ProductFeature({ productData }) {
  const { inTheBox, features } = productData;

  return (
    <Wrapper>
      <FeaturesWrapper>
        <Title forwardedAs={"h3"}>FEATURES</Title>
        <FeatureList>
          {features.map((feature, index) => (
            <Features variant="body" key={index}>
              {feature}
            </Features>
          ))}
        </FeatureList>
      </FeaturesWrapper>
      <ItemsWrapper>
        <Title forwardedAs={"h3"}>IN THE BOX</Title>
        <ItemList>
          {inTheBox.map(({ amount, product }) => (
            <Item key={product}>
              <ItemQuantity variant="body">{amount}x</ItemQuantity>
              <ItemName variant="body">{product}</ItemName>
            </Item>
          ))}
        </ItemList>
      </ItemsWrapper>
    </Wrapper>
  );
}

export default ProductFeature;
