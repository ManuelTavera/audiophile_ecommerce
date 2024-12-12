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

export const ALL_PRODUCTS = {
  "xx99-mark-ii-headphones": {
    name: "XX99 Mark II Headphones",
    description: `The new XX99 Mark II headphones is the pinnacle of pristine audio. 
      It redefines your premium headphone experience by reproducing 
      the balanced depth and precision of studio-quality sound.`,
    price: 2999,
    isNewProduct: true,
    images: [
      "/images/desktop/image-xx99-mark-two-headphones.jpg",
      "/images/tablet/image-xx99-mark-two-headphones-details.jpg",
      "/images/mobile/image-xx99-mark-two-headphones-details.jpg",
    ],
    inTheBox: [
      {
        amount: 1,
        product: "Headphone Unit",
      },
      {
        amount: 2,
        product: "Replacement Earcups",
      },
      {
        amount: 1,
        product: "User Manual",
      },
      {
        amount: 1,
        product: "3.5mm 5m Audio Cable",
      },
      {
        amount: 1,
        product: "Trael Bag",
      },
    ],
    features: [
      `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior 
      comfort for those who like to enjoy endless listening. It includes intuitive 
      controls designed for any situation. Whether you’re taking a business call or 
      just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.`,
      `The advanced Active Noise Cancellation with built-in equalizer allow you to experience your 
      audio world on your terms. It lets you enjoy your audio in peace, but quickly 
      interact with your surroundings when you need to. 
      Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, 
      the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
    ],
    galleryImages: [
      [
        "/images/desktop/image-xx99-mark-two-gallery-1.jpg",
        "/images/tablet/image-xx99-mark-two-gallery-1.jpg",
        "/images/mobile/image-xx99-mark-two-gallery-1.jpg",
      ],
      [
        "/images/desktop/image-xx99-mark-two-gallery-2.jpg",
        "/images/tablet/image-xx99-mark-two-gallery-2.jpg",
        "/images/mobile/image-xx99-mark-two-gallery-2.jpg",
      ],
      [
        "/images/desktop/image-xx99-mark-two-gallery-3.jpg",
        "/images/tablet/image-xx99-mark-two-gallery-3.jpg",
        "/images/mobile/image-xx99-mark-two-gallery-3.jpg",
      ],
    ],
    suggestedProducts: [
      {
        name: "XX99 MARK I",
        images: [
          "/images/desktop/image-xx99-mark-one-headphones-preview.jpg",
          "/images/tablet/image-xx99-mark-one-headphones-preview.jpg",
          "/images/mobile/image-xx99-mark-one-headphones-preview.jpg",
        ],
        href: "/details/xx99-mark-i-headphones",
      },
      {
        name: "XX59",
        images: [
          "/images/desktop/image-xx59-headphones-preview.jpg",
          "/images/tablet/image-xx59-headphones-preview.jpg",
          "/images/mobile/image-xx59-headphones-preview.jpg",
        ],
        href: "/details/xx59-headphones",
      },
      {
        name: "ZX9 SPEAKER",
        images: [
          "/images/desktop/image-zx9-speaker-preview.jpg",
          "/images/tablet/image-zx9-speaker-preview.jpg",
          "/images/mobile/image-zx9-speaker-preview.jpg",
        ],
        href: "/details/zx9-speaker",
      },
    ],
  },
};

export const DETAILS_SLUGS = [
  "xx99-mark-ii-headphones",
  //"xx99-mark-i-headphones",
  //"xx59-headphones",
];
