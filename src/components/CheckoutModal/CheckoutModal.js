import React from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Description } from "@radix-ui/react-dialog";

import {
  Wrapper,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  FlexRow,
  BackButton,
  ItemWrapper,
  ItemsList,
  CheckoutButton,
  Name,
  Image,
  Price,
  FlexColumn,
  Text,
  TotalSum,
  FlexRowBottom,
  NumberWrapper,
  ContentWrapper,
} from "./CheckoutModal.style";
import NumberSelector from "../NumberSelector";

import { CheckoutTheme } from "../CheckoutProvider";

function CheckoutModal({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { cart, emptyCheckoutCart } = React.useContext(CheckoutTheme);
  const [checkoutCart, setCheckoutCart] = React.useState(cart);

  const handleAmountChange = (amount, index) => {
    let newCheckoutCart = [...checkoutCart];

    if (amount <= 0) {
      newCheckoutCart.splice(index, 1);
    } else {
      newCheckoutCart[index].amount = amount;
    }

    console.log(newCheckoutCart)

    setCheckoutCart(newCheckoutCart);
  };

  const handleSubmit = () => {
    console.log(checkoutCart);
  };

  const getTotalSum = () => {
    let total = 0;

    checkoutCart.forEach(({ amount, price }) => {
      total += amount * price;
    });

    return total;
  };

  const handleRemoveItem = () => {
    emptyCheckoutCart();
    setIsOpen(false);
  };

  React.useEffect(() => {
    setCheckoutCart(cart);
  }, [cart]);

  return (
    <Wrapper open={isOpen} onOpenChange={setIsOpen}>
      <Trigger asChild>{children}</Trigger>
      <Portal>
        <Overlay />
        <Content>
          <ContentWrapper>
            <VisuallyHidden.Root>
              <Description>Checkout Cart Modal</Description>
            </VisuallyHidden.Root>
            <FlexRow>
              <Title>CART ({checkoutCart.length})</Title>
              <BackButton onClick={handleRemoveItem}>Remove all</BackButton>
            </FlexRow>
            <ItemsList>
              {checkoutCart.map(({ name, image, amount, price }, index) => (
                <ItemWrapper key={name}>
                  <Image src={image} />
                  <FlexColumn>
                    <Name variant="body">{name}</Name>
                    <Price variant="body">
                      {price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                      })}
                    </Price>
                  </FlexColumn>
                  <NumberWrapper>
                    <NumberSelector
                      onChange={(count) => handleAmountChange(count, index)}
                      value={amount}
                      allowDelete
                    />
                  </NumberWrapper>
                </ItemWrapper>
              ))}
            </ItemsList>
            <FlexRowBottom>
              <Text variant="body">TOTAL</Text>
              <TotalSum>
                {getTotalSum().toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                })}
              </TotalSum>
            </FlexRowBottom>
            <CheckoutButton
              onClick={handleSubmit}
              variant="contained"
              disabled={checkoutCart.length == 0}
            >
              CHECKOUT
            </CheckoutButton>
          </ContentWrapper>
        </Content>
      </Portal>
    </Wrapper>
  );
}

export default CheckoutModal;
