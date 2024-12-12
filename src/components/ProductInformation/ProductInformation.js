import React from "react";
import Link from "next/link";

import {
  Wrapper,
  ImageWrapper,
  Information,
  Header,
  Paragraph,
  Subheader,
  Picture,
  Image,
  ProductButton,
} from "./ProductInformation.style";
import { BREAKPOINTS } from "@/constant";

function ProductInformation({
  image,
  imageAlt,
  isNewProduct,
  title,
  description,
  reverseLayout,
  href = "/",
}) {
  const [desktopImg, tabletImg, mobileImg] = image;

  return (
    <Wrapper $reverseLayout={reverseLayout}>
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
          <Image src={desktopImg} alt={imageAlt} />
        </Picture>
      </ImageWrapper>
      <Information>
        {isNewProduct && <Subheader variant="overline">NEW PRODUCT</Subheader>}
        <Header forwardedAs={"h2"}>{title}</Header>
        <Paragraph variant="body">{description}</Paragraph>
        <Link href={href} passHref legacyBehavior>
          <ProductButton variant="contained" forwardedAs={"a"}>
            SEE PRODUCT
          </ProductButton>
        </Link>
      </Information>
    </Wrapper>
  );
}

export default ProductInformation;
