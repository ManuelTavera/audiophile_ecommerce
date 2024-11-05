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

function ProductFeature() {
  return (
    <Wrapper>
      <FeaturesWrapper>
        <Title forwardedAs={"h3"}>FEATURES</Title>
        <FeatureList>
          <Features variant="body">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you're taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you'll never miss a beat.
          </Features>
          <Features variant="body">
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </Features>
        </FeatureList>
      </FeaturesWrapper>
      <ItemsWrapper>
        <Title forwardedAs={"h3"}>IN THE BOX</Title>
        <ItemList>
          <Item>
            <ItemQuantity variant="body">1x</ItemQuantity>
            <ItemName variant="body">Headphone Unit</ItemName>
          </Item>
          <Item>
            <ItemQuantity variant="body">2x</ItemQuantity>
            <ItemName variant="body">Replacement Earcups</ItemName>
          </Item>
          <Item>
            <ItemQuantity variant="body">1x</ItemQuantity>
            <ItemName variant="body">User Manual</ItemName>
          </Item>
          <Item>
            <ItemQuantity variant="body">1x</ItemQuantity>
            <ItemName variant="body">3.5mm 5m Audio Cable</ItemName>
          </Item>
          <Item>
            <ItemQuantity variant="body">1x</ItemQuantity>
            <ItemName variant="body">Travel Bag</ItemName>
          </Item>
        </ItemList>
      </ItemsWrapper>
    </Wrapper>
  );
}

export default ProductFeature;
