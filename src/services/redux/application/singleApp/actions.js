import { t } from "services/languageManager";
import { toast } from "react-toastify";
import { rejectApp } from "api/main-api";
import { loadedData } from "./../openedApps/actions";

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
export function setError(error) {
  return {
    type: ERROR,
    payload: error
  };
}

export function rejectApplication(app, onSuccess, onError) {
  return function(dispatch, getState) {
    rejectApp()
      .onOk(result => {
        toast.success(t("APP_DETAIL_REJECT_SUCCESS"));
        const { application } = getState();
        const data = application.openedAppsReducer
          ? application.openedAppsReducer.data
          : null;
        if (data) {
          const newData = data.filter(
            item => item.opportunityID !== app.opportunityID
          );
          dispatch(loadedData(newData));
        }
        if (onSuccess) onSuccess();
      })
      .onServerError(result => {
        if (onError) onError();
        toast.error(t("INTERNAL_SERVER_ERROR"));
      })
      .onBadRequest(result => {
        if (onError) onError();
        toast.error(t("BAD_REQUEST"));
      })
      .notFound(result => {
        if (onError) onError();
        toast.error(t("NOT_FOUND"));
      })
      .unKnownError(result => {
        if (onError) onError();
        toast.error(t("UNKNOWN_ERROR"));
      })
      .onRequestError(result => {
        if (onError) onError();
        toast.error(t("ON_REQUEST_ERROR"));
      })
      .call(app.opportunityID);
  };
}
