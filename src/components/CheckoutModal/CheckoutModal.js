import React from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Description } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";

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
  const { cart, setCart } = React.useContext(CheckoutTheme);
  const router = useRouter();

  const handleAmountChange = (amount, index) => {
    let newCheckoutCart = [...cart];

    if (amount <= 0) {
      newCheckoutCart.splice(index, 1);
    } else {
      newCheckoutCart[index].amount = amount;
    }

    setCart(newCheckoutCart);
  };

  const handleSubmit = () => {
    router.push("/checkout");
    setIsOpen(false);
  };

  const getTotalSum = () => {
    let total = 0;

    cart.forEach(({ amount, price }) => {
      total += amount * price;
    });

    return total;
  };

  const handleRemoveItem = () => {
    setCart([]);
    setIsOpen(false);
  };

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
              <Title>CART ({cart.length})</Title>
              <BackButton onClick={handleRemoveItem}>Remove all</BackButton>
            </FlexRow>
            <ItemsList>
              {cart.map(({ name, image, amount, price }, index) => (
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
              disabled={cart.length == 0}
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
