import React from "react";

import { Wrapper, Input, Label, Circle } from "./RadioButton.style";

function RadioButton() {
  return (
    <Wrapper>
      <Input type="radio" />
      <Circle />
      <Label>e-Money</Label>
    </Wrapper>
  );
}

export default RadioButton;
