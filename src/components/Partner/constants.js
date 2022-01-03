export const PARTNERS = [
  // {
  //   id: 0,
  //   link: "https://madtrooper.com/",
  //   image: "/partner/madtrooper.png",
  // },
  {
    id: 6,
    link: "https://authenteq.com/",
    image: "/partner/authenteq.svg",
    imageMobileHeight: 38,
    imageHeight: 66,
  },
  {
    id: 2,
    link: "https://www.b-r-group.com/",
    image: "/partner/brgroup.svg",
    imageMobileHeight: 33,
    imageHeight: 56,
  },
  {
    id: 8,
    link: "https://www.bkex.com/",
    image: "/partner/bkex.svg",
    imageMobileHeight: 33,
    imageHeight: 52,
  },
  {
    id: 1,
    link: "https://hackcontrol.org/",
    image: "/partner/hackctrl.svg",
    imageMobileHeight: 50,
    imageHeight: 70.5,
    // imgStyle: {
    //   filter: "brightness(0) invert(1)",
    // },
  },
  {
    id: 5,
    link: "https://liquidity.ltd/",
    image: "/partner/darkpool.svg",
    imageMobileHeight: 45,
    imageHeight: 63,
  },
  {
    id: 3,
    link: "https://lxmi.io/",
    image: "/partner/lxmi.svg",
    imageMobileHeight: 15,
    imageHeight: 28.3,
    // imgStyle: {
    //   width: "200px",
    // },
  },
  {
    id: 7,
    link: "https://www.bitmart.com/",
    image: "/partner/bitmart.svg",
    imageMobileHeight: 47,
    imageHeight: 66.24,
    imageItemMobileStyle: {
      justifyContent: "flex-end",
    },
  },
  {
    id: 4,
    link: "https://polygon.technology/",
    image: "/partner/polygon.svg",
    imageMobileHeight: 30,
    imageHeight: 46.41,
    // imgStyle: {
    //   width: "200px",
    // },
  },
];

const perChunk = 2; // items per chunk

export const PartnersListMobile = PARTNERS.reduce(
  (resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  },
  []
);
