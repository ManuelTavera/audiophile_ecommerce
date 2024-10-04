import React from "react";

import { Wrapper, Icon } from "./Button.style";

const Button = React.forwardRef(function (
  { children, variant = "text", ...rest },
  ref
) {
  return (
    <Wrapper {...rest} $variant={variant} ref={ref}>
      {children}
      {variant === "text" && (
        <Icon alt="chevron icon" src={"/icon/chevron-icon.svg"} />
      )}
    </Wrapper>
  );
});

Button.displayName = "Button";

export default Button;
