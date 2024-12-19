"use client";
import React from "react";

import {
  Wrapper,
  ControlButton,
  Text,
  DeleteButton,
} from "./NumberSelector.style";

const NumberSelector = React.forwardRef(function (
  { onChange, value = 1, allowDelete = false },
  ref
) {
  const [count, setCount] = React.useState(value);

  const handleDecrement = () => {
    if (count <= 1) {
      if (allowDelete) {
        onChange && onChange(0);
      }
      return;
    }

    const nextCount = count - 1;
    setCount(nextCount);
    onChange && onChange(nextCount);
  };

  const handleIncrement = () => {
    const nextCount = count + 1;
    setCount(nextCount);
    onChange && onChange(nextCount);
  };

  return (
    <Wrapper>
      {allowDelete && (
        <DeleteButton onClick={handleDecrement}>
          {count > 1 ? "-" : "D"}
        </DeleteButton>
      )}
      {!allowDelete && (
        <ControlButton onClick={handleDecrement} disabled={count <= 1}>
          -
        </ControlButton>
      )}
      <Text ref={ref}>{count}</Text>
      <ControlButton onClick={handleIncrement}>+</ControlButton>
    </Wrapper>
  );
});

NumberSelector.displayName = "NumberSelector";

export default NumberSelector;
