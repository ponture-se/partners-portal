import { t } from "services/languageManager";
import { rejectApp } from "api/main-api";

export const LOADING = "main/app/REJECT_LOADING";
export const SUCCESS = "main/app/REJECT_SUCCESS";
export const ERROR = "main/app/REJECT_ERROR";

//
export function toggleLoading(value) {
  return {
    type: LOADING,
    payload: value
  };
}
export const deleteAppLocalLy = data => (dispatch, getState) => {
  console.log(getState);
  // return {
  //   type: SUCCESS,
  //   payload: data
  // };
};
export function setError(error) {
  return {
    type: ERROR,
    payload: error
  };
}

export const rejectApplication = app => dispatch => {
  dispatch(toggleLoading(app.opportunityID));
  // dispatch(deleteAppLocalLy({}));
  return;
  dispatch(toggleLoading(app.opportunityID));
  rejectApp()
    .onOk(result => {
      dispatch(deleteAppLocalLy(result));
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
