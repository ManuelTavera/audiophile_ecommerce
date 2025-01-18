"use client";
import React from "react";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";

export const CheckoutTheme = React.createContext();

function CheckoutProvider({ children }) {
  const localStorageValue = useReadLocalStorage("checkout-cart");
  const [cart, setCart] = useLocalStorage(
    "checkout-cart",
    localStorageValue || []
  );

  const handleAddToCart = React.useCallback(
    (item) => {
      let nextCart = [...cart];
      const existingItemIndex = nextCart.findIndex(
        (element) => element.name === item.name
      );

      if (existingItemIndex !== -1) {
        nextCart[existingItemIndex].amount = item.amount;
      } else {
        nextCart.push(item);
      }

      setCart(nextCart);
    },
    [cart, setCart]
  );

  return (
    <CheckoutTheme.Provider
      value={{
        cart,
        itemsCount: cart.length,
        handleAddToCart,
        setCart,
      }}
    >
      {children}
    </CheckoutTheme.Provider>
  );
}

export default CheckoutProvider;
