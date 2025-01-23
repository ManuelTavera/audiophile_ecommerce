import React from "react";
import { useRouter } from "next/navigation";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Description, Title } from "@radix-ui/react-dialog";

import {
  Wrapper,
  Portal,
  Overlay,
  Content,
  Header,
  Subheader,
  ItemWrapper,
  PriceWrapper,
  HomeButton,
  InfoWrapper,
  IconWrapper,
  ItemList,
  TotalText,
  TotalPrice,
  Line,
  ExpandButton,
  ContentWrapper,
} from "./ConfirmationModal.style";
import CheckIcon from "@/public/icon/check-icon.svg";
import CheckoutItem from "../CheckoutItem";
import { CheckoutTheme } from "@/components/CheckoutProvider";

function ConfirmationModal({ isOpen, handleOpen }) {
  const { cart, setCart } = React.useContext(CheckoutTheme);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const router = useRouter();

  const handleExpanded = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  const handleSubmit = () => {
    handleOpen(false);
    setCart([]);
    router.push("/");
  };

  const totalBeforeTax = cart.reduce(
    (acc, cur) => acc + cur.price * cur.amount,
    0
  );
  const VAT = 0.2 * totalBeforeTax;
  const shipping = 50;
  const total = totalBeforeTax + VAT + shipping;

  return (
    <Wrapper open={isOpen} onOpenChange={handleOpen}>
      <Portal>
        <Overlay />
        <Content>
          <ContentWrapper>
            <VisuallyHidden>
              <Description>Confirmation Modal</Description>
            </VisuallyHidden>
            <IconWrapper>
              <CheckIcon />
            </IconWrapper>
            <Title asChild>
              <Header forwardedAs={"h3"}>
                THANK YOU <br /> FOR YOUR ORDER
              </Header>
            </Title>
            <Subheader variant="body">
              You will receive an email confirmation shortly.
            </Subheader>
            <InfoWrapper>
              <ItemWrapper>
                <ItemList
                  style={{
                    "--maxHeight": isExpanded
                      ? `${80 * cart.length}px`
                      : "64px",
                  }}
                >
                  {cart.map((item) => (
                    <React.Fragment key={item.name}>
                      <CheckoutItem {...item} />
                    </React.Fragment>
                  ))}
                </ItemList>
                <Line />
                {cart.length > 1 && (
                  <ExpandButton onClick={handleExpanded}>
                    {isExpanded
                      ? "View less"
                      : `and ${cart.length - 1} other item (s)`}
                  </ExpandButton>
                )}
              </ItemWrapper>
              <PriceWrapper>
                <TotalText variant="body">GRAND TOTAL</TotalText>
                <TotalPrice>
                  {total.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                </TotalPrice>
              </PriceWrapper>
            </InfoWrapper>
            <HomeButton variant="contained" onClick={handleSubmit}>
              BACK TO HOME
            </HomeButton>
          </ContentWrapper>
        </Content>
      </Portal>
    </Wrapper>
  );
}

export default ConfirmationModal;
