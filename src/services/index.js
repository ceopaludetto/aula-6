import { combineReducers } from "redux";

import { MarsReducer } from "./ducks/mars";

export const reducers = combineReducers({
  mars: MarsReducer,
});

export { root } from "./sagas";
