import { LOADING, SUCCESS, FAILED } from "./actions";

const initialState = {
  loading: false,
  error: null
};

export default function issueOfferReducer(state = initialState, action) {
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
        loading: false
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
