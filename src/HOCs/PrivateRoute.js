import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { currentLangName } from "services/languageManager";

const PrivateRoute = ({ component: Component, ...rest }) => {
  //  return storageManager.getItem("token") ? (
  // return rest.isAuthenticated ? (
  return rest.isAuthenticated ? (
    <Route {...rest} />
  ) : (
    <Route
      render={props => (
        <Redirect
          to={{
            pathname: `/${currentLangName}/login`,
            state: !rest.isLogOut ? { from: props.location } : undefined
          }}
        />
      )}
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer ? state.authReducer.isAuthenticated : null,
  isLogOut: state.authReducer ? state.authReducer.isLogOut : null
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
