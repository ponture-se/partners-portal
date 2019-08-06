import { LOADING, LOADED, ERROR } from "./actions";

const initialState = {
  loading: false,
  data: null,
  error: null
};

export default function newAppsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: action.payLoad
      };
    }
    case LOADED: {
      return {
        ...state,
        loading: false,
        data: action.payLoad
      };
    }
    case ERROR: {
      return {
        ...state,
        userInfo: null,
        isAuthenticated: false
      };
    }
    default: {
      return state;
    }
  }
}
