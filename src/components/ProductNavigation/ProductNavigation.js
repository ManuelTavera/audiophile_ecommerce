import React from "react";

import { NAVIGATION_LINKS_WITHOUT_HOME } from "@/constant";
import { NavigationWrapper, NavigationItem } from "./ProductNavigation.style";
import ProductButton from "../ProductButton";

function ProductNavigation() {
  return (
    <section>
      <NavigationWrapper>
        {NAVIGATION_LINKS_WITHOUT_HOME.map(({ name, image, alt, href }) => (
          <NavigationItem key={name}>
            <ProductButton name={name} image={image} alt={alt} href={href} />
          </NavigationItem>
        ))}
      </NavigationWrapper>
    </section>
  );
}

export default ProductNavigation;
