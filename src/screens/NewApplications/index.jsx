import React, { useEffect } from "react";
import { connect } from "react-redux";
//
import { t } from "../../services/languageManager";
//
import "./styles.scss";
import Item from "./item";
import SquareSpinner from "../../components/SquareSpinner";
import { Empty, Wrong } from "../../components/Commons/ErrorsComponent";
//
import {
  loadNewApps,
  resetStore
} from "services/redux/application/newApps/actions";
//
const NewApplications = props => {
  useEffect(() => {
    if (props.loadNewApps) props.loadNewApps();
    return () => {
      if (props.resetStore) props.resetStore();
    };
  }, []);
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
            <Item key={app.opportunityID} item={app} />
          ))}
        </>
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
  resetStore
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewApplications);
