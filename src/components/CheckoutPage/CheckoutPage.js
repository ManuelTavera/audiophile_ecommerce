import React from "react";
import Link from "next/link";

import {
  Wrapper,
  SubWrapper,
  BackText,
  BackWrapper,
} from "./CheckoutPage.style";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

function CheckoutPage() {
  return (
    <Wrapper>
      <BackWrapper>
        <Link href={"/"} passHref legacyBehavior>
          <BackText variant="body" forwardedAs={"a"}>
            Go Back
          </BackText>
        </Link>
      </BackWrapper>
      <SubWrapper>
        <CheckoutForm />
      </SubWrapper>
    </Wrapper>
  );
}

export default CheckoutPage;
