import React, { useEffect } from "react";
import { connect } from "react-redux";
//
import { t, currentLangName } from "../../services/languageManager";
//
import "./styles.scss";
import Item from "./item";
import SquareSpinner from "../../components/SquareSpinner";
import { Empty, Wrong } from "../../components/Commons/ErrorsComponent";
//
import { loadOpenedApps } from "./../../services/redux/openedApps/actions";

const OpenedApplications = props => {
  useEffect(() => {
    if (props.loadOpenedApps) props.loadOpenedApps();
  }, []);

  function handleRejectedSuccess(app) {
    const newData = props.data.filter(
      item => item.opportunityID !== app.opportunityID
    );
    // setData(newData);
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
            onSuccessRejected={handleRejectedSuccess}
          />
        ))
      )}
    </div>
  );
};
function mapStateToProps(state) {
  return {
    loading: state.openedAppsReducer.loading,
    data: state.openedAppsReducer.data,
    error: state.openedAppsReducer.error
  };
}

const mapDispatchToProps = {
  loadOpenedApps
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenedApplications);
