import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const BTN1 = "BTN1";
const BTN2 = "BTN2";
const BTN3 = "BTN3";
const BTN4 = "BTN4";
const BTN5 = "BTN5";

const Btn1 = () => ({ type: "BTN1" });
const Btn2 = () => ({ type: "BTN2" });
const Btn3 = () => ({ type: "BTN3" });
const Btn4 = () => ({ type: "BTN4" });
const Btn5 = () => ({ type: "BTN5" });

const reducer = (state: any, action: any) => {
  if (state === undefined) {
    return 0;
  }
  switch (action.type) {
    case BTN1:
      return 0;
    case BTN2:
      return -100;
    case BTN3:
      return -200;
    case BTN4:
      return -300;
    case BTN5:
      return -400;
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
