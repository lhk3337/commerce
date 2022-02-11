import products from "../assets/data/products";
import { NumberAction, StateType } from "../types";
const BTN1 = "BTN1" as const;
const BTN2 = "BTN2" as const;
const BTN3 = "BTN3" as const;
const BTN4 = "BTN4" as const;
const BTN5 = "BTN5" as const;

export const Btn1 = () => ({ type: "BTN1" });
export const Btn2 = () => ({ type: "BTN2" });
export const Btn3 = () => ({ type: "BTN3" });
export const Btn4 = () => ({ type: "BTN4" });
export const Btn5 = () => ({ type: "BTN5" });

const initialState: StateType = {
  number: 0,
  price: products[0].price,
  title: products[0].title,
  colors: products[0].colors,
};

const navMenu = (state: StateType = initialState, action: NumberAction) => {
  switch (action.type) {
    case BTN1:
      return { number: 0, price: products[0].price, title: products[0].title, colors: products[0].colors };
    case BTN2:
      return { number: -100, price: products[1].price, title: products[1].title, colors: products[1].colors };
    case BTN3:
      return { number: -200, price: products[2].price, title: products[2].title, colors: products[2].colors };
    case BTN4:
      return { number: -300, price: products[3].price, title: products[3].title, colors: products[3].colors };
    case BTN5:
      return { number: -400, price: products[4].price, title: products[4].title, colors: products[4].colors };
    default:
      return state;
  }
};

export default navMenu;

export const actionCreators = {
  Btn1,
  Btn2,
  Btn3,
  Btn4,
  Btn5,
};
