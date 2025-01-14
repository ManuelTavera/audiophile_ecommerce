import React from "react";

import {
  Wrapper,
  Header,
  Subheader,
  BillingRow,
  InputWrapper,
  InputWrapperHalf,
  ShippingRow,
  InputWrapperFull,
  PaymentRow,
  ColumnWrapper,
  MethodLabel,
} from "./CheckoutForm.style";
import TextField from "@/components/TextField";
import RadioButton from "@/components/RadioButton";

function CheckoutForm() {
  return (
    <Wrapper>
      <Header forwardedAs={"h3"}>CHECKOUT</Header>
      <Subheader variant="subtitle">BILLING DETAILS</Subheader>
      <BillingRow>
        <InputWrapper>
          <TextField label="Name" placeholder="Alexel Ward" />
        </InputWrapper>
        <InputWrapper>
          <TextField label="Email Address" placeholder="alexei@mail.com" />
        </InputWrapper>
        <InputWrapperHalf>
          <TextField label="Phone Number" placeholder="+1 202-555-0136" />
        </InputWrapperHalf>
      </BillingRow>
      <Subheader variant="subtitle">SHIPPING INFO</Subheader>
      <ShippingRow>
        <InputWrapperFull>
          <TextField label="Address" placeholder="1137 Williams Avenue" />
        </InputWrapperFull>
        <InputWrapper>
          <TextField label="ZIP Code" placeholder="10001" />
        </InputWrapper>
        <InputWrapper>
          <TextField label="City" placeholder="New York" />
        </InputWrapper>
        <InputWrapperHalf>
          <TextField label="Country" placeholder="United States" />
        </InputWrapperHalf>
      </ShippingRow>
      <Subheader variant="subtitle">PAYMENT DETAILS</Subheader>
      <PaymentRow>
        <InputWrapperHalf>
          <MethodLabel>Payment Method</MethodLabel>
        </InputWrapperHalf>
        <InputWrapper>
          <ColumnWrapper>
            <RadioButton label="e-money" name="payment-method" />
            <RadioButton label="Cash on Delivery" name="payment-method" />
          </ColumnWrapper>
        </InputWrapper>
        <InputWrapper>
          <TextField label="e-Money Number" placeholder="238521993" />
        </InputWrapper>
        <InputWrapper>
          <TextField label="e-Money PIN" placeholder="6891" />
        </InputWrapper>
      </PaymentRow>
    </Wrapper>
  );
}

export default CheckoutForm;
