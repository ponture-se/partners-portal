import { LOADING, LOADED, ERROR } from "./actions";

const initialState = {
  loading: false,
  data: null,
  error: null
};

export default function openedAppsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: action.payload
      };
    }
    case LOADED: {
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
