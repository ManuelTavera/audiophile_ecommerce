import React from "react";

import { Wrapper, Icon } from "./Button.style";

function Button({ children, variant = "text", ...rest }) {
  return (
    <Wrapper {...rest} $variant={variant}>
      {children}
      {variant === "text" && (
        <Icon alt="chevron icon" src={"/icon/chevron-icon.svg"} />
      )}
    </Wrapper>
  );
}

export default Button;
