import React from "react";
import Link from "next/link";

import {
  Wrapper,
  ImageWrapper,
  Image,
  ProductName,
  ShopButton,
} from "./ProductButton.style";

function ProductButton({ image, name, alt, href }) {
  return (
    <Wrapper as={Link} href={href}>
      <ImageWrapper>
        <Image src={image} alt={alt} />
      </ImageWrapper>
      <ProductName variant="body">{name}</ProductName>
      <ShopButton>Shop</ShopButton>
    </Wrapper>
  );
}

export default ProductButton;
