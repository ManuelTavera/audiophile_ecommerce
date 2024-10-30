import React from "react";
import Link from "next/link";

import { Wrapper, BackText, SubWrapper } from "./ProductDetailPage.style";
import ProductAbout from "./ProductAbout/ProductAbout";

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
    </Wrapper>
  );
}

export default ProductDetailPage;
