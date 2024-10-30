"use client";
import React from "react";

import { Wrapper, ControlButton, Text } from "./NumberSelector.style";

const NumberSelector = React.forwardRef(function ({ onChange }, ref) {
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    onChange && onChange(count);
  }, [count]);

  const handleDecrement = () => {
    if (count <= 1) return;

    const nextCount = count - 1;
    setCount(nextCount);
  };

  const handleIncrement = () => {
    const nextCount = count + 1;
    setCount(nextCount);
  };

  return (
    <Wrapper>
      <ControlButton onClick={handleDecrement} disabled={count <= 1}>
        -
      </ControlButton>
      <Text ref={ref}>{count}</Text>
      <ControlButton onClick={handleIncrement}>+</ControlButton>
    </Wrapper>
  );
});

NumberSelector.displayName = "NumberSelector";

export default NumberSelector;
