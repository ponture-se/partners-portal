import { t } from "services/languageManager";
import { creditReport } from "api/main-api";

export const LOADING = "main/app/LOADING";
export const SUCCESS = "main/app/SUCCESS";
export const ERROR = "main/app/ERROR";

//
export function toggleLoading(value) {
  return {
    type: LOADING,
    payload: value
  };
}
export const loaded = data => {
  return {
    type: SUCCESS,
    payload: data
  };
};
export function setError(error) {
  return {
    type: ERROR,
    payload: error
  };
}

export const viewCreditReport = id => dispatch => {
  dispatch(toggleLoading(true));
  creditReport()
    .onOk(result => {
      dispatch(loaded(result));
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
    .call(id);
};
