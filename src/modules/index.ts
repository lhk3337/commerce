import { combineReducers, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import navMenu from "./navMenu";
import scrollSize from "./scrollSize";
const rootReducer = combineReducers({
  navMenu,
  scrollSize,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
