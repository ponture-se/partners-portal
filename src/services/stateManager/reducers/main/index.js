import { SET_DATA, TOGGLE_LOADING } from "./../../actions/main";
const initialState = {
  loading: true,
  success: false,
  error: true
};
export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOADING: {
      return {
        ...state,
        loading: action.value
      };
    }
    case SET_DATA: {
      return {
        ...state,
        data: action.value
      };
    }
    default: {
      return state;
    }
  }
}
