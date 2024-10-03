import React from "react";

import Typography from "@/components/Typography";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import NumberSelector from "@/components/NumberSelector";
import RadioButton from "@/components/RadioButton";

export default function Home() {
  return (
    <>
      <Button variant={"contained"}>See product</Button>
      <Button variant={"outlined"}>See product</Button>
      <Button>Shop</Button>
      <Typography variant={"body"}>Morbi interdum</Typography>
      <div style={{ maxWidth: 309 }}>
        <TextField label={"name"} placeholder="Insert your name" />
      </div>
      <div style={{ maxWidth: 120 }}>
        <NumberSelector />
      </div>
      <div style={{ maxWidth: 309 }}>
        <RadioButton />
      </div>
    </>
  );
}
