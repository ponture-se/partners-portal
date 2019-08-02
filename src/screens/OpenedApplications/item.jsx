import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
//
import { t, currentLangName } from "../../services/languageManager";
import CircleSpinner from "../../components/CircleSpinner";
import { rejectApp } from "./../../api/main-api";
//
const Item = props => {
  let didCancel = false;
  const { item } = props;
  const [rejectSpinner, toggleRejectSpinner] = useState();
  function handleViewClicked() {
    if (props.onViewClicked) {
      props.onViewClicked(item);
    }
  }
  useEffect(() => {
    return () => {
      didCancel = true;
    };
  }, []);
  function handleRejectApp() {
    if (!rejectSpinner) {
      toggleRejectSpinner(true);
      rejectApp()
        .onOk(result => {
          if (!didCancel) {
            toggleRejectSpinner(false);
            toast.success(t("APP_DETAIL_REJECT_SUCCESS"));
            if (props.onSuccessRejected) {
              props.onSuccessRejected(item);
            }
          }
        })
        .onServerError(result => {
          if (!didCancel) {
            toggleRejectSpinner(false);
            toast.error(t("INTERNAL_SERVER_ERROR"));
          }
        })
        .onBadRequest(result => {
          if (!didCancel) {
            toggleRejectSpinner(false);
            toast.error(t("BAD_REQUEST"));
          }
        })
        .unAuthorized(result => {
          if (!didCancel) {
            toggleRejectSpinner(false);
            toast.error(t("UNKNOWN_ERROR"));
          }
        })
        .notFound(result => {
          if (!didCancel) {
            toggleRejectSpinner(false);
            toast.error(t("NOT_FOUND"));
          }
        })
        .unKnownError(result => {
          if (!didCancel) {
            toggleRejectSpinner(false);
            toast.error(t("UNKNOWN_ERROR"));
          }
        })
        .onRequestError(result => {
          if (!didCancel) {
            toggleRejectSpinner(false);
            toast.error(t("ON_REQUEST_ERROR"));
          }
        })
        .call(item.opportunityID);
    }
  }
  function handleOfferClicked() {
    if (props.onOfferClicked) props.onOfferClicked(item);
  }
  return (
    
    <div className="openedApp animated fadeIn">
      <div className="openedApp__header">
        <span className="openedApp__title">{item.RecordType}</span>
        <div className="openedApp__headerinfo">
          <span>{item.Name}</span>
          <span>{item.createdAt}</span>
          <span>
            {item.amortizationPeriod} {t("MONTH")}
          </span>
          <span>{item.amount} Kr</span>
        </div>
      </div>
      <div className="openedApp__body">
        <div className="openedApp__bodyRow">
          <div className="openedApp__bodyRow__left">
            <span>{t("APP_COMPANY_REGISTERED")}</span>
          </div>
          <div className="openedApp__bodyRow__right">
            <span>{item.CompanyRegistrationDate}</span>
            <span>
              {item.bankVerified ? (
                <i className="icon-checkmark" />
              ) : (
                <i className="icon-cross" style={{ color: "red" }} />
              )}
              <span>{t("APP_BANKID_VERIFIED")}</span>
            </span>
          </div>
        </div>
        <div className="openedApp__bodyRow">
          <div className="openedApp__bodyRow__left">
            <span>{t("APP_NEED_FOR")}</span>
          </div>
          <div className="openedApp__bodyRow__right">
            <span>Renovation Salary</span>
            <span>
              {item.activeCompany ? (
                <i className="icon-checkmark" />
              ) : (
                <i className="icon-cross" style={{ color: "red" }} />
              )}
              <span>{t("APP_ACTIVE_COMPANY")}</span>
            </span>
          </div>
        </div>
        <div className="openedApp__bodyRow">
          <div className="openedApp__bodyRow__left">
            <span>Revenue 2018</span>
          </div>
          <div className="openedApp__bodyRow__right">
            <span>12 000 000.00 Kr</span>
            <span>
              {item.companyVerified ? (
                <i className="icon-checkmark" />
              ) : (
                <i className="icon-cross" style={{ color: "red" }} />
              )}
              <span>{t("APP_COMPANY_VERIFIED")}</span>
            </span>
          </div>
        </div>
        <div className="openedApp__bodyRow">
          <div className="openedApp__bodyRow__left">
            <span>{t("APP_CREDITSAFE_SCRORE")}</span>
          </div>
          <div className="openedApp__bodyRow__right">
            <span>{item.creditSafeScore}</span>
          </div>
        </div>
      </div>
      <div className="openedApp__footer">
        <button className="btn --warning" onClick={handleRejectApp}>
          <CircleSpinner show={rejectSpinner} />
          {!rejectSpinner && t("REJECT")}
        </button>
        <button className="btn --primary" onClick={handleViewClicked}>
          {t("VIEW_APPLICATION")}
        </button>
        <button className="btn --primary" onClick={handleOfferClicked}>
          {t("ISSUE_OFFER")}
        </button>
      </div>
    </div>
  );
};
export default Item;
