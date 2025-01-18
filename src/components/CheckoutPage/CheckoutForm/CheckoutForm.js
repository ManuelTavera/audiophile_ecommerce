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
  CashText,
  CashRow,
} from "./CheckoutForm.style";
import TextField from "@/components/TextField";
import RadioButton from "@/components/RadioButton";
import IconCash from "@/public/icon/icon-cash.svg";

function CheckoutForm({ errors, register, watch }) {
  const paymentMethod = watch("paymentMethod");
  return (
    <Wrapper>
      <Header forwardedAs={"h3"}>CHECKOUT</Header>
      <Subheader variant="subtitle">BILLING DETAILS</Subheader>
      <BillingRow>
        <InputWrapper>
          <TextField
            label="Name"
            name="name"
            placeholder="Alexel Ward"
            errorMessage={errors["name"]?.message}
            {...register("name")}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            label="Email Address"
            placeholder="alexei@mail.com"
            name="email"
            errorMessage={errors["email"]?.message}
            {...register("email")}
          />
        </InputWrapper>
        <InputWrapperHalf>
          <TextField
            label="Phone Number"
            placeholder="+1 202-555-0136"
            name="phone"
            errorMessage={errors["phone"]?.message}
            type="tel"
            {...register("phone")}
          />
        </InputWrapperHalf>
      </BillingRow>
      <Subheader variant="subtitle">SHIPPING INFO</Subheader>
      <ShippingRow>
        <InputWrapperFull>
          <TextField
            label="Address"
            placeholder="1137 Williams Avenue"
            name="address"
            errorMessage={errors["address"]?.message}
            {...register("address")}
          />
        </InputWrapperFull>
        <InputWrapper>
          <TextField
            label="ZIP Code"
            placeholder="10001"
            name="zipCode"
            errorMessage={errors["zipCode"]?.message}
            {...register("zipCode")}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            label="City"
            placeholder="New York"
            name="city"
            errorMessage={errors["city"]?.message}
            {...register("city")}
          />
        </InputWrapper>
        <InputWrapperHalf>
          <TextField
            label="Country"
            placeholder="United States"
            name="country"
            errorMessage={errors["country"]?.message}
            {...register("country")}
          />
        </InputWrapperHalf>
      </ShippingRow>
      <Subheader variant="subtitle">PAYMENT DETAILS</Subheader>
      <PaymentRow>
        <InputWrapperHalf>
          <MethodLabel>Payment Method</MethodLabel>
        </InputWrapperHalf>
        <InputWrapper>
          <ColumnWrapper>
            <RadioButton
              label="e-money"
              name="payment-method"
              value="e-money"
              {...register("paymentMethod")}
            />
            <RadioButton
              label="Cash on Delivery"
              name="payment-method"
              value="cash"
              {...register("paymentMethod")}
            />
          </ColumnWrapper>
        </InputWrapper>
        {paymentMethod === "e-money" && (
          <>
            <InputWrapper>
              <TextField
                label="e-Money Number"
                placeholder="238521993"
                name="eNumber"
                errorMessage={errors["eNumber"]?.message}
                {...register("eNumber")}
              />
            </InputWrapper>
            <InputWrapper>
              <TextField
                label="e-Money PIN"
                placeholder="6891"
                name="ePIN"
                errorMessage={errors["ePIN"]?.message}
                {...register("ePIN", { required: true })}
              />
            </InputWrapper>
          </>
        )}
      </PaymentRow>
      {paymentMethod !== "e-money" && (
        <CashRow>
          <IconCash />
          <CashText variant="body">
            The "Cash on Delivery" option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </CashText>
        </CashRow>
      )}
    </Wrapper>
  );
}

export default CheckoutForm;
