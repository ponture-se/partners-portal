import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
//
import { t, currentLangName } from "../../services/languageManager";
//
import "./styles.scss";
import Item from "./item";
import SquareSpinner from "../../components/SquareSpinner";
import { Empty, Wrong } from "../../components/Commons/ErrorsComponent";
//
import { getOpenedApplications } from "./../../api/main-api";

const OpenedApplications = props => {
  const [spinner, toggleSpinner] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    let didCancel = false;
    getOpenedApplications()
      .onOk(result => {
        toggleSpinner(false);
        if (result && !didCancel) {
          setData(result);
        }
      })
      .onServerError(result => {
        if (!didCancel) {
          toggleSpinner(false);
          setError({
            title: t("INTERNAL_SERVER_ERROR"),
            message: t("INTERNAL_SERVER_ERROR_MSG")
          });
        }
      })
      .onBadRequest(result => {
        if (!didCancel) {
          toggleSpinner(false);
          setError({
            title: t("BAD_REQUEST"),
            message: t("BAD_REQUEST_MSG")
          });
        }
      })
      .unAuthorized(result => {
        if (!didCancel) {
          toggleSpinner(false);
          setError({
            title: t("UNKNOWN_ERROR"),
            message: t("UNKNOWN_ERROR_MSG")
          });
        }
      })
      .notFound(result => {
        if (!didCancel) {
          toggleSpinner(false);
          setError({
            title: t("NOT_FOUND"),
            message: t("NOT_FOUND_MSG")
          });
        }
      })
      .unKnownError(result => {
        if (!didCancel) {
          toggleSpinner(false);
          setError({
            title: t("UNKNOWN_ERROR"),
            message: t("UNKNOWN_ERROR_MSG")
          });
        }
      })
      .onRequestError(result => {
        if (!didCancel) {
          toggleSpinner(false);
          setError({
            title: t("ON_REQUEST_ERROR"),
            message: t("ON_REQUEST_ERROR_MSG")
          });
        }
      })
      .call();
    return () => {
      didCancel = true;
    };
  }, []);

  function handleRejectedSuccess(app) {
    const newData = data.filter(
      item => item.opportunityID !== app.opportunityID
    );
    setData(newData);
  }
  function handleViewClicked(app) {
    props.history.push(
      `/${currentLangName}/viewApplication/${app.opportunityID}`
    );
  }
  function handleOfferClicked(app) {
    props.history.push(`/${currentLangName}/issueOffer/${app.opportunityID}`);
  }

  return (
    <div className="openedApps">
      {spinner ? (
        <div className="page-loading">
          <SquareSpinner />
          <h2>{t("OPEN_APPS_LOADING_TEXT")}</h2>
        </div>
      ) : error ? (
        <div className="page-list-error animated fadeIn">
          <Wrong />
          <h2>{error.title}</h2>
          <span>{error.message}</span>
        </div>
      ) : !data || data.length === 0 ? (
        <div className="page-empty-list animated fadeIn">
          <Empty />
          <h2>{t("OPEN_APPS_EMPTY_LIST_TITLE")}</h2>
          <span>{t("OPEN_APPS_EMPTY_LIST_MSG")}</span>
        </div>
      ) : (
        data.map(app => (
          <Item
            key={app.opportunityID}
            item={app}
            onViewClicked={handleViewClicked}
            onOfferClicked={handleOfferClicked}
            onSuccessRejected={handleRejectedSuccess}
          />
        ))
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenedApplications);
