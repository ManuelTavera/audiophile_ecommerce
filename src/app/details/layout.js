import React from "react";

import ProductNavigation from "@/components/ProductNavigation";
import AboutSection from "@/components/AboutSection";

export default function DetaiilsLayout({ children }) {
  return (
    <>
      {children}
      <ProductNavigation />
      <AboutSection />
    </>
  );
}
