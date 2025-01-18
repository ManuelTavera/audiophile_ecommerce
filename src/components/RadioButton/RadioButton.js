import React from "react";

import { Wrapper, Input, Label, Circle } from "./RadioButton.style";

const RadioButton = React.forwardRef(function ({ label, ...rest }, ref) {
  return (
    <Wrapper>
      <Input type="radio" {...rest} ref={ref} />
      <Circle />
      <Label>{label}</Label>
    </Wrapper>
  );
});

RadioButton.displayName = "RadioButton";

export default RadioButton;
