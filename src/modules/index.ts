import { combineReducers, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import navMenu from "./navMenu";
const rootReducer = combineReducers({
  navMenu,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
