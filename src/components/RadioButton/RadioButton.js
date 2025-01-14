import React from "react";

import { Wrapper, Input, Label, Circle } from "./RadioButton.style";

function RadioButton({ label, ...rest }) {
  return (
    <Wrapper>
      <Input type="radio" {...rest} />
      <Circle />
      <Label>{label}</Label>
    </Wrapper>
  );
}

export default RadioButton;
