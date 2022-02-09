import air1 from "assets/img/air.png";
import air2 from "assets/img/air2.png";

import jordan1 from "assets/img/jordan.png";
import jordan2 from "assets/img/jordan2.png";

import blazer1 from "assets/img/blazer.png";
import blazer2 from "assets/img/blazer2.png";

import crater1 from "assets/img/crater.png";
import crater2 from "assets/img/crater2.png";

import hippie1 from "assets/img/hippie.png";
import hippie2 from "assets/img/hippie2.png";

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    bgcolor: "#369e62",
    colors: [
      {
        code: "black",
        img: air1,
      },
      {
        code: "darkblue",
        img: air2,
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    bgcolor: "rebeccapurple",
    colors: [
      {
        code: "lightgray",
        img: jordan1,
      },
      {
        code: "green",
        img: jordan2,
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    bgcolor: "teal",
    colors: [
      {
        code: "lightgray",
        img: blazer1,
      },
      {
        code: "green",
        img: blazer2,
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    bgcolor: "cornflowerblue",
    colors: [
      {
        code: "black",
        img: crater1,
      },
      {
        code: "lightgray",
        img: crater2,
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    bgcolor: "#7c7350",
    colors: [
      {
        code: "gray",
        img: hippie1,
      },
      {
        code: "black",
        img: hippie2,
      },
    ],
  },
];

export default products;
