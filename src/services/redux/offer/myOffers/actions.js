import React from "react";
import { toast } from "react-toastify";
import { t } from "services/languageManager";
import { getMyOffers, cancelOffer, signLoanAsFunded } from "api/main-api";
import { toggleAlert } from "components/Alert";
import CircleSpinner from "components/CircleSpinner";

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
    payload: value,
  };
}
export function loadedData(data) {
  return {
    type: LOADED,
    payload: data,
  };
}
export function setError(error) {
  return {
    type: ERROR,
    payload: error,
  };
}
export function resetOffersState() {
  return {
    type: CLEAN_DATA,
    payload: null,
  };
}

export const loadMyOffers = () => (dispatch) => {
  dispatch(toggleLoading(true));
  getMyOffers()
    .onOk((result) => {
      dispatch(loadedData(result));
    })
    .onServerError((result) => {
      dispatch(
        setError({
          title: t("INTERNAL_SERVER_ERROR"),
          message: t("INTERNAL_SERVER_ERROR_MSG"),
        })
      );
    })
    .onBadRequest((result) => {
      dispatch(
        setError({
          title: t("BAD_REQUEST"),
          message: t("BAD_REQUEST"),
        })
      );
    })
    .notFound((result) => {
      dispatch(
        setError({
          title: t("NOT_FOUND"),
          message: t("NOT_FOUND"),
        })
      );
    })
    .unKnownError((result) => {
      dispatch(
        setError({
          title: t("UNKNOWN_ERROR"),
          message: t("UNKNOWN_ERROR"),
        })
      );
    })
    .onRequestError((result) => {
      dispatch(
        setError({
          title: t("ON_REQUEST_ERROR"),
          message: t("ON_REQUEST_ERROR"),
        })
      );
    })
    .call();
};
export const _cancelOffer = (offer, reasonsModal, onLocalSuccess) => (
  dispatch
) => {
  //Extra component: cancel with reject
  const rejectAndCancel = (props) => {
    const { ajaxSpinner, toggleAlert } = props.parentStates;
    const activateReject = () => {
      reasonsModal({
        visibility: true,
        offerId: offer.Id,
        callback: () => toggleAlert(),
      });
      // const closeReasons = ["other"];
      // const closeDesc = "description";
      // setInfo({
      //   ...info,
      //   data: {
      //     offerId: offer.Id,
      //     rejectSpo: true,
      //     closeReasons: closeReasons,
      //     closeDesc: closeDesc
      //   }
      // });
      // handleOkBtnClicked({
      //   offerId: offer.Id,
      //   rejectSpo: true,
      //   closeReasons: closeReasons,
      //   closeDesc: closeDesc
      // });
    };
    return (
      <button
        className="btn --success"
        onClick={activateReject}
        disabled={ajaxSpinner}
        autoFocus
      >
        {t("ISSUE_OFFER_CANCEL_ALERT_REJECTANDCANCEL_BTN")}
      </button>
    );
  };
  toggleAlert({
    title: t("ISSUE_OFFER_CANCEL_ALERT_TITLE"),
    description: t("ISSUE_OFFER_CANCEL_ALERT_DESC"),
    cancelBtnText: t("NO"),
    okBtnText: t("ISSUE_OFFER_CANCEL_ALERT_OK_BTN"),
    isAjaxCall: true,
    func: cancelOffer,
    data: {
      offerId: offer.Id,
      rejectSpo: false,
      closeReasons: [],
      closeDesc: "",
    },
    extraComponent: { position: "footer", component: rejectAndCancel },
    style: { zIndex: 999 },
    onCancel: () => {},
    onSuccess: (result) => {
      if (onLocalSuccess) onLocalSuccess();
      else dispatch(loadMyOffers());
      toast.success(t("ISSUE_OFFER_CANCEL_SUCCESS_MSG"));
    },
    onServerError: (error) => {
      toast.error(t("INTERNAL_SERVER_ERROR"));
    },
    onBadRequest: (error) => {
      toast.error(t("BAD_REQUEST"));
    },
    notFound: (error) => {
      toast.error(t("NOT_FOUND"));
    },
    unKnownError: (error) => {
      toast.error(t("UNKNOWN_ERROR"));
    },
  });
};

export const _signLoanAsFunded = (offer, onLocalSuccess) => (dispatch) => {
  toggleAlert({
    title: t("ISSUE_OFFER_SIGN_AS_FUNDED_TITLE"),
    description: t("ISSUE_OFFER_SIGN_AS_FUNDED_DESC"),
    cancelBtnText: t("NO"),
    okBtnText: t("ISSUE_OFFER_SIGN_AS_FUNDED_OK_BTN"),
    isAjaxCall: true,
    func: signLoanAsFunded,
    data: offer,
    onCancel: () => {},
    onSuccess: (result) => {
      if (onLocalSuccess) onLocalSuccess();
      else dispatch(loadMyOffers());
      toast.success(t("ISSUE_OFFER_SIGN_AS_FUNDED_SUCCESS_MSG"));
    },
    onServerError: (error) => {
      toast.error(t("INTERNAL_SERVER_ERROR"));
    },
    onBadRequest: (error) => {
      toast.error(t("BAD_REQUEST"));
    },
    notFound: (error) => {
      toast.error(t("NOT_FOUND"));
    },
    unKnownError: (error) => {
      toast.error(t("UNKNOWN_ERROR"));
    },
  });
};
