import { toast } from "react-toastify";
import { t, currentLangName } from "services/languageManager";
import { submitOffer, updateOffer, getOfferColumns } from "api/main-api";

export const LOADING = "main/issueOffer/LOADING";
export const SUCCESS = "main/issueOffer/LOADED";
export const FAILED = "main/issueOffer/ERROR";
export const COLUMNS_LOADING = "main/loadOfferColumns/COLUMNS_LOADING";
export const COLUMNS_SUCCESS = "main/loadOfferColumns/COLUMNS_LOADED";
export const COLUMNS_FAILED = "main/loadOfferColumns/COLUMNS_ERROR";

//
export function toggleLoading(value) {
  return {
    type: LOADING,
    payload: value
  };
}
export function successSubmit() {
  return {
    type: SUCCESS
  };
}
export function failed(error) {
  return {
    type: FAILED,
    payload: error
  };
}
export function toggleColumnsLoading() {
  return {
    type: COLUMNS_LOADING,
    payload: true
  };
}
export function successLoadColumns(result) {
  return {
    type: COLUMNS_SUCCESS,
    payload: result
  };
}
export function failedLoadColumns(error) {
  return {
    type: COLUMNS_FAILED,
    payload: error
  };
}

export const loadColumns = () => (dispatch, getState) => {
  dispatch(toggleColumnsLoading(true));
  const { authReducer: auth } = getState();
  const partnerId = auth.userInfo.partnerId;
  getOfferColumns()
    .onOk(result => {
      dispatch(successLoadColumns(result));
    })
    .onServerError(result => {
      dispatch(failed({ title: "", message: "" }));
    })
    .onBadRequest(result => {
      dispatch(failed({ title: "", message: "" }));
    })
    .notFound(result => {
      dispatch(failed({ title: "", message: "" }));
    })
    .unKnownError(result => {
      dispatch(failed({ title: "", message: "" }));
    })
    .onRequestError(result => {
      dispatch(failed({ title: "", message: "" }));
    })
    .call(partnerId, currentLangName);
};
export const submitIssueOffer = (offer, onSuccess) => dispatch => {
  dispatch(toggleLoading(true));
  submitOffer()
    .onOk(result => {
      toast.success(t("ISSUE_OFFER_SUCCESS_MSG"));
      dispatch(successSubmit());
      if (onSuccess) {
        onSuccess();
      }
    })
    .onServerError(result => {
      dispatch(failed(result));
      toast.error(t("INTERNAL_SERVER_ERROR"));
    })
    .onBadRequest(result => {
      dispatch(failed(result));
      toast.error(t("BAD_REQUEST"));
    })
    .notFound(result => {
      dispatch(failed(result));
      toast.error(t("NOT_FOUND"));
    })
    .unKnownError(result => {
      dispatch(failed(result));
      toast.error(t("UNKNOWN_ERROR"));
    })
    .onRequestError(result => {
      dispatch(failed(result));
      toast.error(t("ON_REQUEST_ERROR"));
    })
    .call(offer);
};

export const updateIssueOffer = (offer, onSuccess) => dispatch => {
  dispatch(toggleLoading(true));
  updateOffer()
    .onOk(result => {
      toast.success(t("ISSUE_OFFER_UPDATE_SUCCESS_MSG"));
      dispatch(successSubmit());
      if (onSuccess) {
        onSuccess();
      }
    })
    .onServerError(result => {
      dispatch(failed(result));
      toast.error(t("INTERNAL_SERVER_ERROR"));
    })
    .onBadRequest(result => {
      dispatch(failed(result));
      toast.error(t("BAD_REQUEST"));
    })
    .notFound(result => {
      dispatch(failed(result));
      toast.error(t("NOT_FOUND"));
    })
    .unKnownError(result => {
      dispatch(failed(result));
      toast.error(t("UNKNOWN_ERROR"));
    })
    .onRequestError(result => {
      dispatch(failed(result));
      toast.error(t("ON_REQUEST_ERROR"));
    })
    .call(offer);
};
