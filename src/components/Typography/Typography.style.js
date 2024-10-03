"use client";
import styled from "styled-components";
import { COLORS } from "@/constant";

const STYLES = {
  h1: {
    "font-size": `${56 / 16}rem`,
    "line-height": `${58 / 16}rem`,
    "letter-spacing": `${2 / 16}rem`,
  },
  h2: {
    "font-size": `${40 / 16}rem`,
    "line-height": `${44 / 16}rem`,
    "letter-spacing": `${1.5 / 16}rem`,
  },
  h3: {
    "font-size": `${32 / 16}rem`,
    "line-height": `${36 / 16}rem`,
    "letter-spacing": `${1.15 / 16}rem`,
  },
  h4: {
    "font-size": `${28 / 16}rem`,
    "line-height": `${38 / 16}rem`,
    "letter-spacing": `${2 / 16}rem`,
  },
  h5: {
    "font-size": `${24 / 16}rem`,
    "line-height": `${33 / 16}rem`,
    "letter-spacing": `${1.7 / 16}rem`,
  },
  h6: {
    "font-size": `${18 / 16}rem`,
    "line-height": `${24 / 16}rem`,
    "letter-spacing": `${1.3 / 16}rem`,
  },
};

const VARIANTS = {
  overline: {
    "--fontSize": `${14 / 16}rem`,
    "--lineHeight": `${19 / 16}rem`,
    "--letterSpacing": `${10 / 16}rem`,
    "--color": COLORS["lightOrange"],
    "--fontWeight": "400",
  },
  subTitle: {
    "--fontSize": `${13 / 16}rem`,
    "--lineHeight": `${25 / 16}rem`,
    "--letterSpacing": `${1 / 16}rem`,
    "--color": COLORS["orange"],
    "--fontWeight": "bold",
  },
  body: {
    "--fontSize": `${15 / 16}rem`,
    "--lineHeight": `${25 / 16}rem`,
    "--letterSpacing": `${0 / 16}rem`,
    "--color": COLORS["black"],
    "--fontWeight": "500",
    "--textTranform": "none",
  },
};

export const Text = styled.p`
  ${(props) => VARIANTS[props.$variant]};

  color: var(--color, ${COLORS["black"]});
  text-transform: var(--textTranform, uppercase);
  font-weight: var(--fontWeight, bold);

  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  letter-spacing: var(--letterSpacing);

  ${(props) => STYLES[props.as]};
`;
