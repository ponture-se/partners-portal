import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { currentLangName } from "./../services/languageManager";

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
            state: { from: props.location }
          }}
        />
      )}
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
