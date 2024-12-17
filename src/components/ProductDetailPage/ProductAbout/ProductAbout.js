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
import { CheckoutTheme } from "@/components/CheckoutProvider";

function ProductAbout({ productData }) {
  const { images, name, description, isNewProduct, price } = productData;
  const [desktopImg, tabletImg, mobileImg] = images;
  const countRef = React.useRef();
  const { handleAddToCart } = React.useContext(CheckoutTheme);

  const onSubmit = () => {
    // console.log(countRef.current.innerHTML);
    const item = {
      name: name,
      image: desktopImg,
      amount: countRef.current.innerHTML,
    };
    handleAddToCart(item);
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
        {isNewProduct && <Subheader variant="overline">NEW PRODUCT</Subheader>}
        <Header forwardedAs={"h2"}>{name}</Header>
        <Description variant="body">{description}</Description>
        <Price forwardedAs={"h6"}>
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Price>
        <ActionWrapper>
          <CountWrapper>
            <NumberSelector ref={countRef} />
          </CountWrapper>
          <Button variant="contained" onClick={onSubmit}>
            ADD TO CART
          </Button>
        </ActionWrapper>
      </Information>
    </Wrapper>
  );
}

export default ProductAbout;
