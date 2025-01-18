import React from "react";

import {
  Wrapper,
  Label,
  Input,
  ErrorMessage,
  TextRow,
} from "./TextField.style";
import { COLORS } from "@/constant";

const TextField = React.forwardRef(function (
  { label, errorMessage, ...rest },
  ref
) {
  const id = React.useId();
  return (
    <Wrapper
      style={{
        "--errorColor": Boolean(errorMessage) ? COLORS["red"] : undefined,
        "--borderSize": Boolean(errorMessage) ? "2px" : undefined,
      }}
    >
      <TextRow>
        <Label htmlFor={id}>{label}</Label>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </TextRow>
      <Input id={id} {...rest} ref={ref} />
    </Wrapper>
  );
});

TextField.displayName = "TextField";

export default TextField;
