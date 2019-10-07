import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
//
import { t } from "services/languageManager";
//
import "./styles.scss";
import Item from "./item";
import SquareSpinner from "components/SquareSpinner";
import { Empty, Wrong } from "components/Commons/ErrorsComponent";
import IssueOfferModal from "./../IssueOffer";
import ViewApplicationModal from "./../ViewApplication";
import RejectAppModal from "./../Shared/RejectAppModal";
//
import {
  loadOpenedApps,
  resetStore
} from "services/redux/application/openedApps/actions";

const OpenedApplications = props => {
  const [selectedApp, setApp] = useState();
  const [issueOfferVisibility, toggleIssueOffer] = useState();
  const [viewAppModalVisibility, toggleViewApp] = useState();
  const [rejectAppVisibility, toggleRejectApp] = useState();

  useEffect(() => {
    if (props.loadOpenedApps) props.loadOpenedApps();
    return () => {
      if (props.resetStore) props.resetStore();
    };
  }, []);

  function handleViewClicked(app) {
    setApp(app);
    toggleViewApp(true);
  }
  function handleCloseViewAppModal() {
    toggleViewApp(false);
    if (props.loadOpenedApps) props.loadOpenedApps();
  }
  function handleOfferClicked(app) {
    setApp(app);
    toggleIssueOffer(true);
  }
  function handleCloseIssueOffer(isSubmitted) {
    toggleIssueOffer(false);
    if (isSubmitted === true) if (props.loadOpenedApps) props.loadOpenedApps();
  }
  function handleRejectClicked(app) {
    setApp(app);
    toggleRejectApp(true);
  }
  function handleCloseRejectAppModal() {
    toggleRejectApp(false);
  }

  useEffect(() => {
    if (props.submittedIssueOffer)
      if (props.loadOpenedApps) props.loadOpenedApps();
  }, [props.submittedIssueOffer]);
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
            onRejectClicked={handleRejectClicked}
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
      {viewAppModalVisibility && (
        <ViewApplicationModal
          isOpen={viewAppModalVisibility}
          onClose={handleCloseViewAppModal}
          oppId={selectedApp && selectedApp.opportunityID}
        />
      )}
      {rejectAppVisibility && (
        <RejectAppModal
          onClose={handleCloseRejectAppModal}
          app={selectedApp}
          onSuccess={props.loadOpenedApps ? props.loadOpenedApps : null}
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
      : null,
    submittedIssueOffer: state.offer
      ? state.offer.issueOfferReducer
        ? state.offer.issueOfferReducer.success
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
