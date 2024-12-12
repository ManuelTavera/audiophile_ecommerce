import React from "react";
import Link from "next/link";

import {
  Wrapper,
  ProductTitle,
  ProductWrapper,
  ImageWrapper,
  Heading,
  ProductList,
  Image,
  Picture,
} from "./ProductRecommended.style";
import { BREAKPOINTS } from "@/constant";

import Button from "@/components/Button";

function ProductRecommended({ productData }) {
  const { suggestedProducts } = productData;

  return (
    <Wrapper>
      <Heading forwardedAs={"h3"}>YOU MAY ALSO LIKE</Heading>

      <ProductList>
        {suggestedProducts.map(({ name, images, href }) => (
          <Link href={href} passHref legacyBehavior key={name}>
            <ProductWrapper>
              <ImageWrapper>
                <Picture>
                  <source
                    media={`(max-width: ${BREAKPOINTS["mobile"]}px)`}
                    srcSet={images[2]}
                  />
                  <source
                    media={`(max-width: ${BREAKPOINTS["tablet"]}px)`}
                    srcSet={images[1]}
                  />
                  <Image src={images[0]} alt={"Image product one"} />
                </Picture>
              </ImageWrapper>
              <ProductTitle forwardedAs={"h5"}>{name}</ProductTitle>
              <Button variant="contained">SEE PRODUCT</Button>
            </ProductWrapper>
          </Link>
        ))}
      </ProductList>
    </Wrapper>
  );
}

export default ProductRecommended;
