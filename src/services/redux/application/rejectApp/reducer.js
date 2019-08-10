import { LOADING, SUCCESS, ERROR } from "./actions";

const initialState = {
  loading: {},
  data: null,
  error: null
};

export default function rejectAppReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      let obj = state.loading;
      obj[payload] = !obj[payload];
      return {
        ...state,
        loading: obj
      };
    }
    case SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
