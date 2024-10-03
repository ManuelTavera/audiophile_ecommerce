import React from "react";

import { Wrapper, ControlButton, Text } from "./NumberSelector.style";

function NumberSelector() {
  return (
    <Wrapper>
      <ControlButton>-</ControlButton>
      <Text>1</Text>
      <ControlButton>+</ControlButton>
    </Wrapper>
  );
}

export default NumberSelector;
