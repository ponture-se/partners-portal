import { t } from "services/languageManager";
import { getNewApplications } from "api/main-api";

export const LOADING = "main/newApps/LOADING";
export const LOADED = "main/newApps/LOADED";
export const ERROR = "main/newApps/ERROR";

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

export const loadNewApps = () => dispatch => {
  dispatch(toggleLoading(true));
  getNewApplications()
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
