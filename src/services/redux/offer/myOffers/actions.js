import { toast } from "react-toastify";
import { t } from "services/languageManager";
import { getMyOffers, cancelOffer } from "api/main-api";

export const LOADING = "main/myOffers/LOADING";
export const LOADED = "main/myOffers/LOADED";
export const ERROR = "main/myOffers/ERROR";
export const CLEAN_DATA = "main/myOffers/CLEAN_DATA";

export const CANCEL_LOADING = "main/myOffers/CANCEL_LOADING";
export const CANCEL_SUCCESS = "main/myOffers/CANCEL_SUCCESS";
export const CANCEL_ERROR = "main/myOffers/CANCEL_ERROR";

//
export function toggleLoading(value) {
  return {
    type: LOADING,
    payload: value
  };
}
export function loadedData(data) {
  return {
    type: LOADED,
    payload: data
  };
}
export function setError(error) {
  return {
    type: ERROR,
    payload: error
  };
}
export function resetOffersState() {
  return {
    type: CLEAN_DATA,
    payload: null
  };
}

export const loadMyOffers = () => dispatch => {
  dispatch(toggleLoading(true));
  getMyOffers()
    .onOk(result => {
      dispatch(loadedData(result));
    })
    .onServerError(result => {
      dispatch(
        setError({
          title: t("INTERNAL_SERVER_ERROR"),
          message: t("INTERNAL_SERVER_ERROR_MSG")
        })
      );
    })
    .onBadRequest(result => {
      dispatch(
        setError({
          title: t("BAD_REQUEST"),
          message: t("BAD_REQUEST")
        })
      );
    })
    .notFound(result => {
      dispatch(
        setError({
          title: t("NOT_FOUND"),
          message: t("NOT_FOUND")
        })
      );
    })
    .unKnownError(result => {
      dispatch(
        setError({
          title: t("UNKNOWN_ERROR"),
          message: t("UNKNOWN_ERROR")
        })
      );
    })
    .onRequestError(result => {
      dispatch(
        setError({
          title: t("ON_REQUEST_ERROR"),
          message: t("ON_REQUEST_ERROR")
        })
      );
    })
    .call();
};
export const _cancelOffer = (offer, onSuccess, onError) => dispatch => {
  dispatch({ type: CANCEL_LOADING });
  cancelOffer()
    .onOk(result => {
      dispatch({ type: CANCEL_SUCCESS });
      toast.success(t("ISSUE_OFFER_UPDATE_SUCCESS_MSG"));
      if (onSuccess) onSuccess();
    })
    .onServerError(result => {
      dispatch({ type: CANCEL_ERROR });
      toast.error(t("INTERNAL_SERVER_ERROR"));
      if (onError) onError();
    })
    .onBadRequest(result => {
      dispatch({ type: CANCEL_ERROR });
      toast.error(t("BAD_REQUEST"));
      if (onError) onError();
    })
    .notFound(result => {
      dispatch({ type: CANCEL_ERROR });
      toast.error(t("NOT_FOUND"));
      if (onError) onError();
    })
    .unKnownError(result => {
      dispatch({ type: CANCEL_ERROR });
      toast.error(t("UNKNOWN_ERROR"));
      if (onError) onError();
    })
    .onRequestError(result => {
      dispatch({ type: CANCEL_ERROR });
      toast.error(t("ON_REQUEST_ERROR"));
      if (onError) onError();
    })
    .call(offer.offer_id);
};
