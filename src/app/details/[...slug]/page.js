import React from "react";
import { notFound } from "next/navigation";
import { DETAILS_SLUGS, ALL_PRODUCTS } from "@/constant";
import ProductDetailPage from "@/components/ProductDetailPage";

export default function Page({ params }) {
  const { slug } = params;
  const [_slug] = slug;

  if (!DETAILS_SLUGS.includes(_slug)) {
    return notFound();
  }

  const productData = ALL_PRODUCTS[_slug];

  return <ProductDetailPage productData={productData} />;
}
