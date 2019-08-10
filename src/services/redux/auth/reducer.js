import {
  SUCCESS_TOKEN,
  FAILED_TOKEN,
  SET_USER,
  SET_AUTHORIZATION,
  LOGOUT,
  LOADING
} from "./actions";

const initialState = {
  loading: false,
  isAuthenticated: false,
  userInfo: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case SUCCESS_TOKEN: {
      return {
        ...state,
        loading: false
      };
    }
    case SET_AUTHORIZATION: {
      return {
        ...state,
        isAuthenticated: action.value
      };
    }
    case SET_USER: {
      return {
        ...state,
        userInfo: action.user
      };
    }
    case LOGOUT: {
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
