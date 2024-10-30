"use client";
import React from "react";

import {
  Wrapper,
  ImageWrapper,
  Picture,
  Information,
  Subheader,
  Header,
  Description,
  Price,
  ActionWrapper,
  Image,
  CountWrapper,
} from "./ProductAbout.style";
import { BREAKPOINTS } from "@/constant";
import Button from "@/components/Button";
import NumberSelector from "@/components/NumberSelector";

const image = [
  "/images/desktop/image-xx99-mark-two-headphones.jpg",
  "/images/tablet/image-xx99-mark-two-headphones-details.jpg",
  "/images/mobile/image-xx99-mark-two-headphones-details.jpg",
];

function ProductAbout() {
  const [desktopImg, tabletImg, mobileImg] = image;
  const countRef = React.useRef();

  const handleAddToCart = () => {
    console.log(countRef.current.innerHTML);
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <Picture>
          <source
            media={`(max-width: ${BREAKPOINTS["mobile"]}px)`}
            srcSet={mobileImg}
          />
          <source
            media={`(max-width: ${BREAKPOINTS["tablet"]}px)`}
            srcSet={tabletImg}
          />
          <Image src={desktopImg} alt={"imagen"} />
        </Picture>
      </ImageWrapper>
      <Information>
        <Subheader variant="overline">NEW PRODUCT</Subheader>
        <Header forwardedAs={"h2"}>XX99 Mark II Headphones</Header>
        <Description variant="body">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </Description>
        <Price forwardedAs={"h6"}>$2,999</Price>
        <ActionWrapper>
          <CountWrapper>
            <NumberSelector ref={countRef} />
          </CountWrapper>
          <Button variant="contained" onClick={handleAddToCart}>
            ADD TO CART
          </Button>
        </ActionWrapper>
      </Information>
    </Wrapper>
  );
}

export default ProductAbout;
