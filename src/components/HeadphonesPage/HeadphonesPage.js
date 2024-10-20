import React from "react";

import { ProductSectionWrapper } from "./HeadphonesPage.style";

import ProductInformation from "../ProductInformation";
import ProductPage from "../ProductPage";

function HeadphonesPage() {
  return (
    <ProductPage title="HEADPHONES">
      <ProductSectionWrapper>
        <ProductInformation
          image={[
            "/images/desktop/image-xx99-mark-two-headphones.jpg",
            "/images/tablet/image-xx99-mark-two-headphones.jpg",
            "/images/mobile/image-xx99-mark-two-headphones.jpg",
          ]}
          imageAlt="XX99 Headphones Mark II"
          isNewProduct={true}
          title="XX99 Mark II Headphones"
          description={`The new XX99 Mark II headphones is the pinnacle of pristine audio. It
              redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.`}
        />
      </ProductSectionWrapper>
      <ProductSectionWrapper>
        <ProductInformation
          image={[
            "/images/desktop/image-xx99-mark-one-headphones.jpg",
            "/images/tablet/image-xx99-mark-one-headphones.jpg",
            "/images/mobile/image-xx99-mark-one-headphones.jpg",
          ]}
          imageAlt="XX99 Headphones Mark I"
          title="XX99 Mark I Headphones"
          description={`As the gold standard for headphones, 
              the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, 
              mixing engineers, and music aficionados alike in studios and on the go.`}
          reverseLayout
        />
      </ProductSectionWrapper>
      <ProductSectionWrapper>
        <ProductInformation
          image={[
            "/images/desktop/image-xx59-headphones.jpg",
            "/images/tablet/image-xx59-headphones.jpg",
            "/images/mobile/image-xx59-headphones.jpg",
          ]}
          imageAlt="XX59 Headphones"
          title="XX59 Headphones"
          description={`Enjoy your audio almost anywhere 
              and customize it to your specific tastes with the XX59 headphones. 
              The stylish yet durable versatile wireless headset is a 
              brilliant companion at home or on the move.`}
        />
      </ProductSectionWrapper>
    </ProductPage>
  );
}

export default HeadphonesPage;
