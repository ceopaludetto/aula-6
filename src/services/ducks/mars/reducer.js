import { MarsTypes } from "./types";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MarsTypes.REQUEST:
      return { ...state, loading: true };
    case MarsTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case MarsTypes.FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};
