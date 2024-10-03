import React from "react";

import { Text } from "./Typography.style";

function Typography({ children, as = "p", variant, ...rest }) {
  return (
    <Text {...rest} as={as} $variant={variant}>
      {children}
    </Text>
  );
}

export default Typography;
