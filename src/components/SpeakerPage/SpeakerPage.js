import React from "react";

import { ProductSectionWrapper } from "./SpeakerPage.style";

import ProductInformation from "../ProductInformation";
import ProductPage from "../ProductPage";

function SpeakerPage() {
  return (
    <ProductPage title="SPEAKERS">
      <ProductSectionWrapper>
        <ProductInformation
          image={[
            "/images/desktop/image-zx9-speaker.jpg",
            "/images/tablet/image-zx9-speaker.jpg",
            "/images/mobile/image-zx9-speaker.jpg",
          ]}
          imageAlt="ZX9 SPEAKER"
          isNewProduct={true}
          title="ZX9 SPEAKER"
          description={`Upgrade your sound system with the all new ZX9 active speaker. 
            It’s a bookshelf speaker system that offers truly wireless connectivity 
            -- creating new possibilities for more pleasing and practical audio setups.`}
          href="/details/zx9-speakers"
        />
      </ProductSectionWrapper>
      <ProductSectionWrapper>
        <ProductInformation
          image={[
            "/images/desktop/image-zx7-speaker.jpg",
            "/images/tablet/image-zx7-speaker.jpg",
            "/images/mobile/image-zx7-speaker.jpg",
          ]}
          imageAlt="ZX7 SPEAKER"
          title="ZX7 SPEAKER"
          description={`Stream high quality sound wirelessly with minimal loss. 
            The ZX7 bookshelf speaker uses high-end audiophile components that 
            represents the top of the line powered speakers for home or studio use.`}
          reverseLayout
          href="/details/zx7-speakers"
        />
      </ProductSectionWrapper>
    </ProductPage>
  );
}

export default SpeakerPage;
