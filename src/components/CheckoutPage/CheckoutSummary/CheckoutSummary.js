import React from "react";
import {
  Wrapper,
  Header,
  ItemList,
  CheckoutText,
  Row,
  CheckoutCost,
  CheckoutTotal,
  TotalRow,
  CheckoutButton,
} from "./CheckoutSummary.style";
import CheckoutItem from "@/components/CheckoutItem";
import { CheckoutTheme } from "@/components/CheckoutProvider";

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
