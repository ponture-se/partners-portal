import { toast } from "react-toastify";
import { t } from "services/languageManager";
import { submitOffer } from "api/main-api";

export const LOADING = "main/issueOffer/LOADING";
export const SUCCESS = "main/issueOffer/LOADED";
export const FAILED = "main/issueOffer/ERROR";

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

export const submitIssueOffer = (offer, onSuccess) => dispatch => {
  dispatch(toggleLoading(true));
  submitOffer()
    .onOk(result => {
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
