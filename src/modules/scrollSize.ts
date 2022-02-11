import { scrollAction } from "types";

const SCROLL = "SCROLL" as const;
export const Scroll = () => ({ type: "SCROLL" });

const scrollSize = (state: string = "", action: scrollAction) => {
  switch (action.type) {
    case SCROLL:
      return console.log("a");
    default:
      return state;
  }
};
export default scrollSize;

export const actionCreator = {
  Scroll,
};
