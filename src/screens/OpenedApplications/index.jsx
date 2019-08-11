import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
//
import { t, currentLangName, setAppLang } from "services/languageManager";
//
import "./styles.scss";
import Item from "./item";
import SquareSpinner from "components/SquareSpinner";
import { Empty, Wrong } from "components/Commons/ErrorsComponent";
import IssueOfferModal from "./../IssueOffer";
//
import {
  loadOpenedApps,
  resetStore
} from "services/redux/application/openedApps/actions";

const OpenedApplications = props => {
  const [selectedApp, setApp] = useState();
  const [issueOfferVisibility, toggleIssueOffer] = useState();

  useEffect(() => {
    if (props.loadOpenedApps) props.loadOpenedApps();
    return () => {
      if (props.resetStore) props.resetStore();
    };
  }, []);

  function handleViewClicked(app) {
    props.history.push(
      `/${currentLangName}/viewApplication/${app.opportunityID}`
    );
  }
  function handleOfferClicked(app) {
    setApp(app);
    toggleIssueOffer(true);
  }
  function handleCloseIssueOffer() {
    toggleIssueOffer(false);
  }
  

  return (
    <div className="openedApps">
      {props.loading ? (
        <div className="page-loading">
          <SquareSpinner />
          <h2>{t("OPEN_APPS_LOADING_TEXT")}</h2>
        </div>
      ) : props.error ? (
        <div className="page-list-error animated fadeIn">
          <Wrong />
          <h2>{props.error && props.error.title}</h2>
          <span>{props.error && props.error.message}</span>
        </div>
      ) : !props.data || props.data.length === 0 ? (
        <div className="page-empty-list animated fadeIn">
          <Empty />
          <h2>{t("OPEN_APPS_EMPTY_LIST_TITLE")}</h2>
          <span>{t("OPEN_APPS_EMPTY_LIST_MSG")}</span>
        </div>
      ) : (
        props.data.map(app => (
          <Item
            key={app.opportunityID}
            item={app}
            onViewClicked={handleViewClicked}
            onOfferClicked={handleOfferClicked}
          />
        ))
      )}
      {issueOfferVisibility && (
        <IssueOfferModal
          app={selectedApp}
          isOpen={issueOfferVisibility}
          onClose={handleCloseIssueOffer}
        />
      )}
    </div>
  );
};
function mapStateToProps(state) {
  return {
    loading: state.application
      ? state.application.openedAppsReducer
        ? state.application.openedAppsReducer.loading
        : null
      : null,
    data: state.application
      ? state.application.openedAppsReducer
        ? state.application.openedAppsReducer.data
        : null
      : null,
    error: state.application
      ? state.application.openedAppsReducer
        ? state.application.openedAppsReducer.error
        : null
      : null
  };
}

const mapDispatchToProps = {
  loadOpenedApps,
  resetStore
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenedApplications);
