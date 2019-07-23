import { SET_USER, SET_AUTHORIZATION, LOGOUT } from "./../../actions/auth";
const initialState = {
  isAuthenticated: false,
  userInfo: null
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
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
