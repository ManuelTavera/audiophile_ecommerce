import React from "react";

import { ProductSectionWrapper } from "./EarphonePage.style";

import ProductInformation from "../ProductInformation";
import ProductPage from "../ProductPage";

function EarphonePage() {
  return (
    <ProductPage title="EARPHONES">
      <ProductSectionWrapper>
        <ProductInformation
          image={[
            "/images/desktop/image-yx1-earphones.jpg",
            "/images/tablet/image-yx1-earphones.jpg",
            "/images/mobile/image-yx1-earphones.jpg",
          ]}
          imageAlt="YX1 WIRELESS EARPHONES"
          isNewProduct={true}
          title="YX1 WIRELESS EARPHONES"
          description={`Tailor your listening experience with 
            bespoke dynamic drivers from the new YX1 Wireless Earphones. 
            Enjoy incredible high-fidelity sound even in noisy environments 
            with its active noise cancellation feature.`}
        />
      </ProductSectionWrapper>
    </ProductPage>
  );
}

export default EarphonePage;
