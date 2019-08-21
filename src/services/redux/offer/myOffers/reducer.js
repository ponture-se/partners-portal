import {
  LOADING,
  LOADED,
  ERROR,
  CLEAN_DATA,
  CANCEL_LOADING,
  CANCEL_SUCCESS,
  CANCEL_ERROR
} from "./actions";

const initialState = {
  loading: true,
  data: null,
  error: null,
  cancel_loading: false,
  cancel_success: false,
  cancel_error: false
};

export default function myOffersReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: action.payload,
        data: null
      };
    }
    case LOADED: {
      return {
        ...state,
        loading: false,
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
    case CANCEL_LOADING: {
      return {
        ...state,
        cancel_loading: true,
        cancel_success: false
      };
    }
    case CANCEL_SUCCESS: {
      return {
        ...state,
        cancel_loading: false,
        cancel_success: true
      };
    }
    case CANCEL_ERROR: {
      return {
        ...state,
        cancel_loading: false,
        cancel_error: true
      };
    }
    default: {
      return state;
    }
  }
}
