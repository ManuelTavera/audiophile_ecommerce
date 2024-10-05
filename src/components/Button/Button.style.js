"use client";
import styled from "styled-components";
import { COLORS } from "@/constant";

const VARIANTS = {
  contained: {
    "--backgroundColor": COLORS["orange"],
    "--color": COLORS["white"],
  },
  outlined: {
    "--color": COLORS["black"],
    "--border": `1px solid ${COLORS["black"]}`,
  },
  text: {
    "--color": `color-mix(in hsl, ${COLORS["black"]}, transparent);`,
  },
};

const hoverStyles = (props) => {
  let styles = ``;
  if (props === "contained") {
    styles = `
        --backgroundColor: ${COLORS["lightOrange"]}
    `;
  }

  if (props === "outlined") {
    styles = `
        --backgroundColor: ${COLORS["black"]};
        --color: ${COLORS["white"]};
        --border: none;
    `;
  }

  if (props === "text") {
    styles = `
        --color: ${COLORS["lightOrange"]};
    `;
  }

  return styles;
};

export const Wrapper = styled.button`
  ${(props) => VARIANTS[props.$variant]}
  min-width: 160px;
  min-height: 48px;
  font-size: ${13 / 16}rem;
  font-weight: bold;
  letter-spacing: ${1 / 16}rem;
  border: var(--border, none);
  background-color: var(--backgroundColor, none);
  color: var(--color);
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  &:hover {
    ${(props) => hoverStyles(props.$variant)}
  }
`;

export const Icon = styled.img``;
