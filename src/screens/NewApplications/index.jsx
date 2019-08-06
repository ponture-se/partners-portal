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
import { loadNewApps } from "services/redux/newApps/actions";
//
const NewApplications = props => {
  useEffect(() => {
    props.loadNewApps();
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
        props.data.map(app => <Item key={app.opportunityID} item={app} />)
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    loading: state.newAppsReducer.loading,
    data: state.newAppsReducer.data,
    error: state.newAppsReducer.error
  };
}

const mapDispatchToProps = {
  loadNewApps
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewApplications);
