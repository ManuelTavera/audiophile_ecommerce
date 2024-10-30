import React from "react";

import ProductNavigation from "@/components/ProductNavigation";

export default function DetaiilsLayout({ children }) {
  return (
    <>
      {children}
      <ProductNavigation />
    </>
  );
}
