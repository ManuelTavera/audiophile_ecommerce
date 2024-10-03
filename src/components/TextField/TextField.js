import React from "react";

import {
  Wrapper,
  Label,
  Input,
  ErrorMessage,
  TextRow,
} from "./TextField.style";

function TextField({ label, errorMessage, ...rest }) {
  const id = React.useId();
  return (
    <Wrapper>
      <TextRow>
        <Label htmlFor={id}>{label}</Label>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </TextRow>
      <Input id={id} {...rest} />
    </Wrapper>
  );
}

export default TextField;
