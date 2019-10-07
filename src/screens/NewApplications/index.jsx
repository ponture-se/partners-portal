import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
//
import { t } from "services/languageManager";
//
import "./styles.scss";
import Item from "./item";
import SquareSpinner from "components/SquareSpinner";
import { Empty, Wrong } from "components/Commons/ErrorsComponent";
import ViewApplicationModal from "./../ViewApplication";
import RejectAppModal from "./../Shared/RejectAppModal";
//
import {
  loadNewApps,
  resetStore
} from "services/redux/application/newApps/actions";
import { rejectApplication } from "services/redux/application/singleApp/actions";
//
const NewApplications = props => {
  const [viewAppModalVisibility, toggleViewApp] = useState();
  const [selectedApp, setApp] = useState();
  const [rejectAppVisibility, toggleRejectApp] = useState();

  useEffect(() => {
    if (props.loadNewApps) props.loadNewApps();
    return () => {
      if (props.resetStore) props.resetStore();
    };
  }, []);
  function handleViewApplication(app) {
    setApp(app);
    toggleViewApp(true);
  }
  function handleCloseViewAppModal() {
    toggleViewApp(false);
    if (props.loadNewApps) props.loadNewApps();
  }
  function handleRejectApplication(app) {
    setApp(app);
    toggleRejectApp(true);
    // if (props.rejectApplication) {
    //   props.rejectApplication(app.opportunityID, () => {
    //     if (props.loadNewApps) props.loadNewApps();
    //   });
    // }
  }
  function handleCloseRejectAppModal() {
    toggleRejectApp(false);
  }
  return (
    <div className="newApps">
      {props.loading ? (
        <div className="page-loading">
          <SquareSpinner />
          <h2>{t("NEW_APPS_LOADING_TEXT")}</h2>
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
          <h2>{t("NEW_APPS_EMPTY_LIST_TITLE")}</h2>
          <span>{t("NEW_APPS_EMPTY_LIST_MSG")}</span>
        </div>
      ) : (
        <>
          {/* <div className="searchbar">
            <button className="btn --primary --small">{t("Filter 1")}</button>
            <button className="btn --light --small">{t("Filter 2")}</button>
            <button className="btn --light --small">{t("Filter 3")}</button>
            <div className="formInput">
              <div className="formInput__body">
                <input
                  type="text"
                  className="element --small"
                  placeholder={t("Search in new applications...")}
                />
              </div>
            </div>
            <div className="formInput">
              <div className="formInput__body">
                <input
                  type="text"
                  className="element --small"
                  placeholder={t("Search in new applications...")}
                />
              </div>
            </div>
          </div> */}
          {props.data.map(app => (
            <Item
              key={app.opportunityID}
              item={app}
              onViewAppClicked={handleViewApplication}
              onRejectAppClicked={handleRejectApplication}
            />
          ))}
        </>
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
          onSuccess={props.loadNewApps ? props.loadNewApps : null}
        />
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    loading: state.application
      ? state.application.newAppsReducer
        ? state.application.newAppsReducer.loading
        : null
      : null,
    data: state.application
      ? state.application.newAppsReducer
        ? state.application.newAppsReducer.data
        : null
      : null,
    error: state.application
      ? state.application.newAppsReducer
        ? state.application.newAppsReducer.error
        : null
      : null
  };
}

const mapDispatchToProps = {
  loadNewApps,
  resetStore,
  rejectApplication
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewApplications);
