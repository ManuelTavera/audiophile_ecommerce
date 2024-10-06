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
  graySecondary: "hsl(0, 0%, 30%)",
};

export const BREAKPOINTS = {
  tablet: 1000,
  mobile: 600,
};

export const MEDIA_QUERIES = {
  tablet: `@media screen and (max-width: ${BREAKPOINTS["tablet"]}px)`,
  mobile: `@media screen and (max-width: ${BREAKPOINTS["mobile"]}px)`,
};

export const NAVIGATION_LINKS = [
  {
    name: "HOME",
    href: "/",
    image: "",
    alt: "",
  },
  {
    name: "HEADPHONES",
    href: "/headphones",
    image: "/images/image-category-thumbnail-headphones.png",
    alt: "Headphones",
  },
  {
    name: "SPEAKERS",
    href: "/speakers",
    image: "/images/image-category-thumbnail-speakers.png",
    alt: "Speakers",
  },
  {
    name: "EARPHONES",
    href: "/earphones",
    image: "/images/image-category-thumbnail-earphones.png",
    alt: "Earphones",
  },
];

export const NAVIGATION_LINKS_WITHOUT_HOME = NAVIGATION_LINKS.filter(
  ({ name }) => name !== "HOME"
);
