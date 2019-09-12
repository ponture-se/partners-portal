import { LOADING, LOADED, ERROR, CLEAN_DATA } from "./actions";

const initialState = {
  loading: true,
  data: null,
  error: null
};

export default function newAppsReducer(state = initialState, action) {
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
        error: null,
        data: action.payload
      };
    }
    case CLEAN_DATA: {
      return {
        ...state,
        loading: true,
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
