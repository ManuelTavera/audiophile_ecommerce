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
  "xx99-mark-i-headphones": {
    name: "XX99 Mark I Headphones",
    description: `As the gold standard for headphones, 
    the classic XX99 Mark I offers detailed and accurate audio 
    reproduction for audiophiles, mixing engineers, and music aficionados 
    alike in studios and on the go.`,
    price: 1750,
    isNewProduct: false,
    images: [
      "/images/desktop/image-xx99-mark-one-headphones.jpg",
      "/images/tablet/image-xx99-mark-one-headphones-details.jpg",
      "/images/mobile/image-xx99-mark-one-headphones-details.jpg",
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
    ],
    features: [
      `As the headphones all others are measured against, 
      the XX99 Mark I demonstrates over 
      five decades of audio expertise, 
      redefining the critical listening experience. 
      This pair of closed-back headphones are made of industrial, 
      aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.`,
      `From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, 
      the components work together to deliver comfort and uncompromising sound. 
      Its closed-back design delivers up to 27 dB of passive noise cancellation, 
      reducing resonance by reflecting sound to a dedicated absorber. 
      For connectivity, a specially tuned cable is included with a balanced gold connector.`,
    ],
    galleryImages: [
      [
        "/images/desktop/image-xx99-mark-one-gallery-1.jpg",
        "/images/tablet/image-xx99-mark-one-gallery-1.jpg",
        "/images/mobile/image-xx99-mark-one-gallery-1.jpg",
      ],
      [
        "/images/desktop/image-xx99-mark-one-gallery-2.jpg",
        "/images/tablet/image-xx99-mark-one-gallery-2.jpg",
        "/images/mobile/image-xx99-mark-one-gallery-2.jpg",
      ],
      [
        "/images/desktop/image-xx99-mark-one-gallery-3.jpg",
        "/images/tablet/image-xx99-mark-one-gallery-3.jpg",
        "/images/mobile/image-xx99-mark-one-gallery-3.jpg",
      ],
    ],
    suggestedProducts: [
      {
        name: "XX99 MARK II",
        images: [
          "/images/desktop/image-xx99-mark-two-headphones-preview.jpg",
          "/images/tablet/image-xx99-mark-two-headphones-preview.jpg",
          "/images/mobile/image-xx99-mark-two-headphones-preview.jpg",
        ],
        href: "/details/xx99-mark-ii-headphones",
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
  "xx59-headphones": {
    name: "XX59 Headphones",
    description: `Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. 
    The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.`,
    price: 899,
    isNewProduct: false,
    images: [
      "/images/desktop/image-xx59-headphones.jpg",
      "/images/tablet/image-xx59-headphones-details.jpg",
      "/images/mobile/image-xx59-headphones-details.jpg",
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
    ],
    features: [
      `These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.`,
      `More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.`,
    ],
    galleryImages: [
      [
        "/images/desktop/image-xx59-gallery-1.jpg",
        "/images/tablet/image-xx59-gallery-1.jpg",
        "/images/mobile/image-xx59-gallery-1.jpg",
      ],
      [
        "/images/desktop/image-xx59-gallery-2.jpg",
        "/images/tablet/image-xx59-gallery-2.jpg",
        "/images/mobile/image-xx59-gallery-2.jpg",
      ],
      [
        "/images/desktop/image-xx59-gallery-3.jpg",
        "/images/tablet/image-xx59-gallery-3.jpg",
        "/images/mobile/image-xx59-gallery-3.jpg",
      ],
    ],
    suggestedProducts: [
      {
        name: "XX99 MARK II",
        images: [
          "/images/desktop/image-xx99-mark-two-headphones-preview.jpg",
          "/images/tablet/image-xx99-mark-two-headphones-preview.jpg",
          "/images/mobile/image-xx99-mark-two-headphones-preview.jpg",
        ],
        href: "/details/xx99-mark-ii-headphones",
      },
      {
        name: "XX99 MARK I",
        images: [
          "/images/desktop/image-xx99-mark-one-headphones-preview.jpg",
          "/images/tablet/image-xx99-mark-one-headphones-preview.jpg",
          "/images/mobile/image-xx99-mark-one-headphones-preview.jpg",
        ],
        href: "/details/image-xx99-mark-one-headphones",
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
  "zx9-speakers": {
    name: "ZX9 Speaker",
    description: `Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.`,
    price: 4500,
    isNewProduct: false,
    images: [
      "/images/desktop/zx9-speaker.jpg",
      "/images/tablet/zx9-speaker-details.jpg",
      "/images/mobile/zx9-speaker-details.jpg",
    ],
    inTheBox: [
      {
        amount: 2,
        product: "Speaker Unit",
      },
      {
        amount: 2,
        product: "Speaker Cloth Panel",
      },
      {
        amount: 1,
        product: "User Manual",
      },
      {
        amount: 1,
        product: "3.5mm 10m Audio Cable",
      },
      {
        amount: 1,
        product: "10m Optical Cable",
      },
    ],
    features: [
      `Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).`,
      `Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.`,
    ],
    galleryImages: [
      [
        "/images/desktop/image-zx9-gallery-1.jpg",
        "/images/tablet/image-zx9-gallery-1.jpg",
        "/images/mobile/image-zx9-gallery-1.jpg",
      ],
      [
        "/images/desktop/image-zx9-gallery-2.jpg",
        "/images/tablet/image-zx9-gallery-2.jpg",
        "/images/mobile/image-zx9-gallery-2.jpg",
      ],
      [
        "/images/desktop/image-zx9-gallery-3.jpg",
        "/images/tablet/image-zx9-gallery-3.jpg",
        "/images/mobile/image-zx9-gallery-3.jpg",
      ],
    ],
    suggestedProducts: [
      {
        name: "ZX7 SPEAKER",
        images: [
          "/images/desktop/image-zx7-speaker-preview.jpg",
          "/images/tablet/image-zx7-speaker-preview.jpg",
          "/images/mobile/image-zx7-speaker-preview.jpg",
        ],
        href: "/details/xx99-mark-ii-headphones",
      },
      {
        name: "XX99 MARK I",
        images: [
          "/images/desktop/image-xx99-mark-one-headphones-preview.jpg",
          "/images/tablet/image-xx99-mark-one-headphones-preview.jpg",
          "/images/mobile/image-xx99-mark-one-headphones-preview.jpg",
        ],
        href: "/details/image-xx99-mark-one-headphones",
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
    ],
  },
};

export const DETAILS_SLUGS = [
  "xx99-mark-ii-headphones",
  "xx99-mark-i-headphones",
  "xx59-headphones",
  "zx9-speakers",
];
