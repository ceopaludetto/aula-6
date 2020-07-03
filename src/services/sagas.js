import { all, takeLatest } from "redux-saga/effects";

import { GetAllPhotos, MarsTypes } from "./ducks/mars";

export function* root() {
  yield all([takeLatest(MarsTypes.REQUEST, GetAllPhotos)]);
}
