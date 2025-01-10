import React from "react";

import ProductNavigation from "@/components/ProductNavigation";
import AboutSection from "@/components/AboutSection";

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <ProductNavigation />
      <AboutSection />
    </>
  );
}
