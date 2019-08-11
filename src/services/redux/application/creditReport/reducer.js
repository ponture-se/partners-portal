import { LOADING, SUCCESS, ERROR } from "./actions";

const initialState = {
  loading: true,
  data: null,
  error: null
};

export default function creditReportReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }
    case SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload
      };
    }
    case ERROR: {
      return {
        ...state,
        loading: false,
        error: payload
      };
    }
    default: {
      return state;
    }
  }
}
