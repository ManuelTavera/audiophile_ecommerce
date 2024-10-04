import React from "react";

import { Text } from "./Typography.style";

const Typography = React.forwardRef(function (
  { children, as = "p", variant, ...rest },
  ref
) {
  return (
    <Text {...rest} as={as} $variant={variant} ref={ref}>
      {children}
    </Text>
  );
});

Typography.displayName = "Typography";

export default Typography;
