import { createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
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
};

const reducer = (state: StateType = initialState, action: NumberAction) => {
  switch (action.type) {
    case BTN1:
      return { number: 0 };
    case BTN2:
      return { number: -100 };
    case BTN3:
      return { number: -200 };
    case BTN4:
      return { number: -300 };
    case BTN5:
      return { number: -400 };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;

export const actionCreators = {
  Btn1,
  Btn2,
  Btn3,
  Btn4,
  Btn5,
};
