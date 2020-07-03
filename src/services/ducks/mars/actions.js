import { MarsTypes } from "./types";

export const requestMars = (user, page = 1) => ({
  type: MarsTypes.REQUEST,
  payload: { user, page },
});

export const successMars = (data) => ({
  type: MarsTypes.SUCCESS,
  payload: { data },
});

export const failureMars = (error) => ({
  type: MarsTypes.FAILURE,
  payload: { error },
});
