import React from "react";
import {
  Wrapper,
  ImageWrapper,
  LeftColumn,
  RightColumn,
  Picture,
  Image,
} from "./ProductGallery.style";
import { BREAKPOINTS } from "@/constant";

function ProductGallery({ productData }) {
  const { galleryImages } = productData;
  const [imgOneDesktop, imgOneTablet, imgOneMobile] = galleryImages[0];
  const [imgTwoDesktop, imgTwoTablet, imgTwoMobile] = galleryImages[1];
  const [imgThreeDesktop, imgThreeTablet, imgThreeMobile] = galleryImages[2];

  return (
    <Wrapper>
      <LeftColumn>
        <ImageWrapper>
          <Picture>
            <source
              media={`(max-width: ${BREAKPOINTS["mobile"]}px)`}
              srcSet={imgOneMobile}
            />
            <source
              media={`(max-width: ${BREAKPOINTS["tablet"]}px)`}
              srcSet={imgOneTablet}
            />
            <Image src={imgOneDesktop} alt={"Image gallery one"} />
          </Picture>
        </ImageWrapper>
        <ImageWrapper>
          <Picture>
            <source
              media={`(max-width: ${BREAKPOINTS["mobile"]}px)`}
              srcSet={imgTwoMobile}
            />
            <source
              media={`(max-width: ${BREAKPOINTS["tablet"]}px)`}
              srcSet={imgTwoTablet}
            />
            <Image src={imgTwoDesktop} alt={"Image gallery two"} />
          </Picture>
        </ImageWrapper>
      </LeftColumn>
      <RightColumn>
        <ImageWrapper>
          <Picture>
            <source
              media={`(max-width: ${BREAKPOINTS["mobile"]}px)`}
              srcSet={imgThreeMobile}
            />
            <source
              media={`(max-width: ${BREAKPOINTS["tablet"]}px)`}
              srcSet={imgThreeTablet}
            />
            <Image src={imgThreeDesktop} alt={"Image gallery two"} />
          </Picture>
        </ImageWrapper>
      </RightColumn>
    </Wrapper>
  );
}

export default ProductGallery;
