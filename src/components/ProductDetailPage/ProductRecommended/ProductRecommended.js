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

const images = {
  one: [
    "/images/desktop/image-xx99-mark-one-headphones-preview.jpg",
    "/images/tablet/image-xx99-mark-one-headphones-preview.jpg",
    "/images/mobile/image-xx99-mark-one-headphones-preview.jpg",
  ],
  two: [
    "/images/desktop/image-xx59-headphones-preview.jpg",
    "/images/tablet/image-xx59-headphones-preview.jpg",
    "/images/mobile/image-xx59-headphones-preview.jpg",
  ],
  three: [
    "/images/desktop/image-zx9-speaker-preview.jpg",
    "/images/tablet/image-zx9-speaker-preview.jpg",
    "/images/mobile/image-zx9-speaker-preview.jpg",
  ],
};

function ProductRecommended() {
  const [imgOneDesktop, imgOneTablet, imgOneMobile] = images["one"];
  const [imgTwoDesktop, imgTwoTablet, imgTwoMobile] = images["two"];
  const [imgThreeDesktop, imgThreeTablet, imgThreeMobile] = images["three"];

  return (
    <Wrapper>
      <Heading forwardedAs={"h3"}>YOU MAY ALSO LIKE</Heading>

      <ProductList>
        <Link href={"/"} passHref legacyBehavior>
          <ProductWrapper>
            <ImageWrapper>
              <Picture>
                <source
                  media={`(max-width: ${BREAKPOINTS["mobile"]}px)`}
                  srcSet={imgOneMobile}
                />
                <source
                  media={`(max-width: ${BREAKPOINTS["tablet"]}px)`}
                  srcSet={imgOneTablet}
                />
                <Image src={imgOneDesktop} alt={"Image product one"} />
              </Picture>
            </ImageWrapper>
            <ProductTitle forwardedAs={"h5"}>XX99 MARK I</ProductTitle>
            <Button variant="contained">SEE PRODUCT</Button>
          </ProductWrapper>
        </Link>
        <Link href={"/"} passHref legacyBehavior>
          <ProductWrapper>
            <ImageWrapper>
              <Picture>
                <source
                  media={`(max-width: ${BREAKPOINTS["mobile"]}px)`}
                  srcSet={imgTwoMobile}
                />
                <source
                  media={`(max-width: ${BREAKPOINTS["tablet"]}px)`}
                  srcSet={imgTwoTablet}
                />
                <Image src={imgTwoDesktop} alt={"Image product one"} />
              </Picture>
            </ImageWrapper>
            <ProductTitle forwardedAs={"h5"}>XX59</ProductTitle>
            <Button variant="contained">SEE PRODUCT</Button>
          </ProductWrapper>
        </Link>
        <Link href={"/"} passHref legacyBehavior>
          <ProductWrapper>
            <ImageWrapper>
              <Picture>
                <source
                  media={`(max-width: ${BREAKPOINTS["mobile"]}px)`}
                  srcSet={imgThreeMobile}
                />
                <source
                  media={`(max-width: ${BREAKPOINTS["tablet"]}px)`}
                  srcSet={imgThreeTablet}
                />
                <Image src={imgThreeDesktop} alt={"Image product one"} />
              </Picture>
            </ImageWrapper>
            <ProductTitle forwardedAs={"h5"}>ZX9 SPEAKER</ProductTitle>
            <Button variant="contained">SEE PRODUCT</Button>
          </ProductWrapper>
        </Link>
      </ProductList>
    </Wrapper>
  );
}

export default ProductRecommended;
