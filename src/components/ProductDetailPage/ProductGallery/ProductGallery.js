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

const images = {
  one: [
    "/images/desktop/image-xx99-mark-two-gallery-1.jpg",
    "/images/tablet/image-xx99-mark-two-gallery-1.jpg",
    "/images/mobile/image-xx99-mark-two-gallery-1.jpg",
  ],
  two: [
    "/images/desktop/image-xx99-mark-two-gallery-2.jpg",
    "/images/tablet/image-xx99-mark-two-gallery-2.jpg",
    "/images/mobile/image-xx99-mark-two-gallery-2.jpg",
  ],
  three: [
    "/images/desktop/image-xx99-mark-two-gallery-3.jpg",
    "/images/tablet/image-xx99-mark-two-gallery-3.jpg",
    "/images/mobile/image-xx99-mark-two-gallery-3.jpg",
  ],
};

function ProductGallery() {
  const [imgOneDesktop, imgOneTablet, imgOneMobile] = images["one"];
  const [imgTwoDesktop, imgTwoTablet, imgTwoMobile] = images["two"];
  const [imgThreeDesktop, imgThreeTablet, imgThreeMobile] = images["three"];

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
