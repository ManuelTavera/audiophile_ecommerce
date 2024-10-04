"use client";
import styled from "styled-components";
import { COLORS } from "@/constant";

const STYLES = {
  h1: {
    "--fontSize": `${56 / 16}rem`,
    "--lineHeight": `${58 / 16}rem`,
    "--letterSpacing": `${2 / 16}rem`,
  },
  h2: {
    "--fontSize": `${40 / 16}rem`,
    "--lineHeight": `${44 / 16}rem`,
    "--letterSpacing": `${1.5 / 16}rem`,
  },
  h3: {
    "--fontSize": `${32 / 16}rem`,
    "--lineHeight": `${36 / 16}rem`,
    "--letterSpacing": `${1.15 / 16}rem`,
  },
  h4: {
    "--fontSize": `${28 / 16}rem`,
    "--lineHeight": `${38 / 16}rem`,
    "--letterSpacing": `${2 / 16}rem`,
  },
  h5: {
    "--fontSize": `${24 / 16}rem`,
    "--lineHeight": `${33 / 16}rem`,
    "--letterSpacing": `${1.7 / 16}rem`,
  },
  h6: {
    "--fontSize": `${18 / 16}rem`,
    "--lineHeight": `${24 / 16}rem`,
    "--letterSpacing": `${1.3 / 16}rem`,
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
  subtitle: {
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
  ${(props) => STYLES[props.as]};

  color: var(--color, ${COLORS["black"]});
  text-transform: var(--textTranform, uppercase);
  font-weight: var(--fontWeight, bold);

  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  letter-spacing: var(--letterSpacing);
`;
