import { t } from "services/languageManager";
import { toast } from "react-toastify";
import { rejectApp } from "api/main-api";
import { toggleAlert } from "components/Alert";
import { loadOpenedApps } from "./../openedApps/actions";

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

export function rejectApplication(spoId, onLocalSuccess) {
  return function(dispatch, getState) {
    toggleAlert({
      title: t("APP_DETAIL_REJECT_ALERT_TITLE"),
      description: t("APP_DETAIL_REJECT_ALERT_DESC"),
      cancelBtnText: t("NO"),
      okBtnText: t("APP_DETAIL_REJECT_ALERT_OK_BTN"),
      isAjaxCall: true,
      func: rejectApp,
      data: {
        spoId
      },
      onCancel: () => {},
      onSuccess: result => {
        toast.success(t("APP_DETAIL_REJECT_SUCCESS"));
        if (onLocalSuccess) {
          onLocalSuccess();
        } else dispatch(loadOpenedApps());
      },
      onServerError: error => {
        toast.error(t("INTERNAL_SERVER_ERROR"));
      },
      onBadRequest: error => {
        toast.error(t("BAD_REQUEST"));
      },
      notFound: error => {
        toast.error(t("NOT_FOUND"));
      },
      unKnownError: error => {
        toast.error(t("UNKNOWN_ERROR"));
      }
    });
  };
}
