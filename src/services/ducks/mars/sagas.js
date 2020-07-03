import { call, put } from "redux-saga/effects";

import { api } from "../../../providers/api";
import { successMars, failureMars } from "./actions";

export function* GetAllPhotos(action) {
  try {
    const res = yield call(
      api.get,
      `/users/${action.payload.user}/repos?page=${action.payload.page}`
    );

    if (res.data && res.data.length) {
      yield put(successMars(res.data));
    } else {
      yield put(failureMars(new Error("Falha ao buscar fotos de marte")));
    }
  } catch (error) {
    yield put(failureMars(error));
  }
}
