import React from "react";

import {
  Wrapper,
  ImageWrapper,
  Information,
  Header,
  Paragraph,
  Subheader,
  Picture,
  Image,
} from "./ProductInformation.style";
import { BREAKPOINTS } from "@/constant";

import Button from "@/components/Button";

function ProductInformation({
  image,
  imageAlt,
  isNewProduct,
  title,
  description,
  reverseLayout,
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
        <Button variant="contained">SEE PRODUCT</Button>
      </Information>
    </Wrapper>
  );
}

export default ProductInformation;
