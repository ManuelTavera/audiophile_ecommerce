import React from "react";
import Link from "next/link";

import { Wrapper, BackText, SubWrapper } from "./ProductDetailPage.style";
import ProductAbout from "./ProductAbout/ProductAbout";
import ProductFeature from "./ProductFeature/ProductFeature";
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductRecommended from "./ProductRecommended/ProductRecommended";

function ProductDetailPage() {
  return (
    <Wrapper>
      <SubWrapper>
        <Link href={"/"} passHref legacyBehavior>
          <BackText variant="body" forwardedAs={"a"}>
            Go Back
          </BackText>
        </Link>
      </SubWrapper>
      <ProductAbout />
      <ProductFeature />
      <ProductGallery />
      <ProductRecommended />
    </Wrapper>
  );
}

export default ProductDetailPage;
