import {
  LOADING,
  SUCCESS,
  FAILED,
  COLUMNS_LOADING,
  COLUMNS_SUCCESS,
  COLUMNS_FAILED
} from "./actions";

const initialState = {
  loading: false,
  error: null,
  success: false,
  columnsLoading: false,
  columns: null,
  columnsError: null
};

export default function issueOfferReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload,
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
    case COLUMNS_LOADING: {
      return {
        ...state,
        columnsLoading: payload
      };
    }
    case COLUMNS_SUCCESS: {
      return {
        ...state,
        columnsLoading: false,
        columns: payload
      };
    }
    case COLUMNS_FAILED: {
      return {
        ...state,
        columnsLoading: false,
        columnsError: payload
      };
    }
    default: {
      return state;
    }
  }
}
