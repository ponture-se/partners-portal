import { LOADING, SUCCESS, FAILED } from "./actions";

const initialState = {
  loading: false,
  error: null,
  success: false
};

export default function issueOfferReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: action.payload,
        success: false
      };
    }
    case SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true
      };
    }
    case FAILED: {
      return {
        ...state,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
}
