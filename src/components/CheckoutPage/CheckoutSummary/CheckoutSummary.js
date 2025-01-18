import React from "react";
import {
  Wrapper,
  Header,
  ItemImage,
  ItemName,
  ItemPrice,
  ItemAmount,
  ItemList,
  ItemWrapper,
  ItemInfo,
  CheckoutText,
  Row,
  CheckoutCost,
  CheckoutTotal,
  TotalRow,
  CheckoutButton,
} from "./CheckoutSummary.style";

import { CheckoutTheme } from "@/components/CheckoutProvider";

function CheckoutItem({ name, image, price, amount }) {
  return (
    <ItemWrapper>
      <ItemImage alt={name} src={image} />
      <ItemInfo>
        <ItemName variant="body">{name}</ItemName>
        <ItemPrice variant="body">
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          })}
        </ItemPrice>
      </ItemInfo>
      <ItemAmount variant="body">x{amount}</ItemAmount>
    </ItemWrapper>
  );
}

function CheckoutSummary() {
  const { cart } = React.useContext(CheckoutTheme);

  const totalBeforeTax = cart.reduce(
    (acc, cur) => acc + cur.price * cur.amount,
    0
  );
  const VAT = 0.2 * totalBeforeTax;
  const shipping = 50;
  const total = totalBeforeTax + VAT + shipping;

  return (
    <Wrapper>
      <Header forwardedAs={"h6"}>SUMMARY</Header>
      <ItemList>
        {cart.map((item) => (
          <React.Fragment key={item.name}>
            <CheckoutItem {...item} />
          </React.Fragment>
        ))}
      </ItemList>
      <Row>
        <CheckoutText variant="body">TOTAL</CheckoutText>
        <CheckoutCost forwardedAs={"h6"}>
          {totalBeforeTax.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          })}
        </CheckoutCost>
      </Row>
      <Row>
        <CheckoutText variant="body">SHIPPING</CheckoutText>
        <CheckoutCost forwardedAs={"h6"}>
          {shipping.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          })}
        </CheckoutCost>
      </Row>
      <Row>
        <CheckoutText variant="body">VAT (INCLUDED)</CheckoutText>
        <CheckoutCost forwardedAs={"h6"}>
          {VAT.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          })}
        </CheckoutCost>
      </Row>
      <TotalRow>
        <CheckoutText variant="body">GRAND TOTAL</CheckoutText>
        <CheckoutTotal forwardedAs={"h6"}>
          {total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          })}
        </CheckoutTotal>
      </TotalRow>
      <CheckoutButton variant="contained" type="submit">
        CONTINUE & PAY
      </CheckoutButton>
    </Wrapper>
  );
}

export default CheckoutSummary;
