import { types } from "./actions";

const initialState = {
  loading: false,
  isAuthenticated: false,
  userInfo: null
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  const {
    SUCCESS_TOKEN,
    FAILED_TOKEN,
    SET_USER,
    SET_AUTHORIZATION,
    LOGOUT,
    LOADING,
    UN_AUTHORIZED
  } = types;
  switch (type) {
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
    case FAILED_TOKEN: {
      return {
        ...state,
        loading: false
      };
    }
    case SET_AUTHORIZATION: {
      return {
        ...state,
        isAuthenticated: true,
        isLogOut: false
      };
    }
    case SET_USER: {
      return {
        ...state,
        userInfo: payload
      };
    }
    case LOGOUT: {
      return {
        ...state,
        userInfo: null,
        isAuthenticated: false,
        isLogOut: true
      };
    }
    case UN_AUTHORIZED: {
      return {
        ...state,
        userInfo: null,
        isAuthenticated: false,
        isLogOut: false
      };
    }
    default: {
      return state;
    }
  }
}
