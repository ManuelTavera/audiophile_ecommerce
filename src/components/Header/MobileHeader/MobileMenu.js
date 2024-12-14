import React from "react";
import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { COLORS, MEDIA_QUERIES } from "@/constant";
import ProductButton from "@/components/ProductButton";
import { NAVIGATION_LINKS_WITHOUT_HOME } from "@/constant";

const Wrapper = styled(Dialog.Root)``;
const Trigger = styled(Dialog.Trigger)``;
const Portal = styled(Dialog.Portal)``;
const Overlay = styled(Dialog.Overlay)`
  background-color: color-mix(in hsl, ${COLORS["black"]} 40%, transparent);
  position: fixed;
  inset: 0;
`;

const slideIn = keyframes`
    from {
        opacity: 0;
        left: -100%;
    }

    to {
        opacity: 1;
        left: 0;
    }
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  background-color: ${COLORS["white"]};
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-top: 90px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 67px;
  top: var(--headerHeight);
  animation: ${slideIn} 0.45s linear;
  display: flex;
  gap: 10px;
  bottom: 0;
  overflow-y: auto;

  ${MEDIA_QUERIES["mobile"]} {
    flex-direction: column;
    padding: 85px 24px 35px;
    gap: 46px;
  }
`;

const NavigationItem = styled.div`
  flex-basis: 33%;
`;

function MobileMenu({ children }) {
  return (
    <Wrapper>
      <Trigger asChild>{children}</Trigger>
      <Portal>
        <Overlay />
        <Content aria-describedby={undefined}>
          <>
            <VisuallyHidden.Root>
              <Dialog.Title>Navigation Links</Dialog.Title>
            </VisuallyHidden.Root>
            <VisuallyHidden.Root>
              <Dialog.Description>
                Navigation links for mobile menu
              </Dialog.Description>
            </VisuallyHidden.Root>
            {NAVIGATION_LINKS_WITHOUT_HOME.map(({ name, href, image, alt }) => (
              <NavigationItem key={name}>
                <ProductButton
                  name={name}
                  image={image}
                  alt={alt}
                  href={href}
                />
              </NavigationItem>
            ))}
          </>
        </Content>
      </Portal>
    </Wrapper>
  );
}

export default MobileMenu;
