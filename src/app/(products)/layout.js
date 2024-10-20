import React from "react";

import ProductNavigation from "@/components/ProductNavigation";

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <ProductNavigation />
    </>
  );
}
