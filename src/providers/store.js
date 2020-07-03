import { createStore, applyMiddleware } from "redux";
import createSaga from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducers, root } from "../services";

// create saga middleware
const saga = createSaga();

// create store with combined reducers and apply saga middleware
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(saga))
);

// run root saga
saga.run(root);
