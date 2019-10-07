import { LOADING, SUCCESS, ERROR } from "./actions";

const initialState = {
  loading: true,
  data: null,
  error: null,
};

export default function openedAppsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: action.payload
      };
    }
    case SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
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
