import React from "react";

import {
  ItemImage,
  ItemName,
  ItemPrice,
  ItemAmount,
  ItemWrapper,
  ItemInfo,
} from "./CheckoutItem.style";

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

export default CheckoutItem;
