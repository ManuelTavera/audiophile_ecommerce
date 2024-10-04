export const COLORS = {
  black: "hsl(0, 0%, 0%)",
  white: "hsl(0, 0%, 100%)",
  darkGray: "hsl(0, 0%, 95%)",
  lightGray: "hsl(0, 0%, 98%)",
  blackSecondary: "hsl(0, 0%, 6%)",
  orange: "hsl(22, 65%, 57%)",
  lightOrange: "hsl(21, 94%, 75%)",
  gray: "hsl(0, 0%, 81%)",
  red: "hsl(0, 65%, 49%)",
  darkLight: "hsl(0, 0%, 8%)",
};

export const BREAKPOINTS = {
  tablet: 1000,
  mobile: 600,
};

export const MEDIA_QUERIES = {
  tablet: `@media screen and (max-width: ${BREAKPOINTS["tablet"]}px)`,
  mobile: `@media screen and (max-width: ${BREAKPOINTS["mobile"]}px)`,
};
