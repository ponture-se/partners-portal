import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { t, currentLangName } from "../services/languageManager";
import { getUserInfo } from "../api/account-api";
import { setUserInfo } from "./../services/stateManager/actions/auth";
//
const widthResolver = WrappedComponent => {
  function mapStateToProps(state) {
    return {
      userInfo: state.authReducer.userInfo
    };
  }

  const mapDispatchToProps = {
    setUserInfo
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(props => {
    const [loading, toggleLoading] = useState(props.userInfo ? false : true);
    const [error, setError] = useState();

    function refresh() {
      window.location.reload();
    }
    useEffect(() => {
      // if (loading) {
      //   getUserInfo()
      //     .onOk(result => {
      //       props.setUserInfo(result);
      //       toggleLoading(false);
      //     })
      //     .onServerError(result => {
      //       setError("Internal server error");
      //       toggleLoading(false);
      //     })
      //     .onBadRequest(result => {
      //       setError("Bad request");
      //       toggleLoading(false);
      //     })
      //     .unAuthorized(result => {
      //       setError(
      //         "There is an error which has occured in the request.\ntry again "
      //       );
      //       toggleLoading(false);
      //     })
      //     .notFound(result => {
      //       setError(
      //         "There is an error which has occured in the request.\ntry again "
      //       );
      //       toggleLoading(false);
      //     })
      //     .onRequestError(result => {
      //       setError(
      //         "There is an error which has occured in the request.\ntry again "
      //       );
      //       toggleLoading(false);
      //     })
      //     .unKnownError(result => {
      //       setError(
      //         "There is an error which has occured in the request.\ntry again "
      //       );
      //       toggleLoading(false);
      //     })
      //     .call();
      // }
    }, []);
    return <WrappedComponent {...props} />;
    return !loading ? (
      error ? (
        <div className="rosolverError animated fadeIn">
          <i className="icon-empty-box-open icon" />
          <span className="title">Error has occured!</span>
          <span className="info">{error}</span>
          <button className="btn btn-primary" onClick={refresh}>
            Refresh
          </button>
        </div>
      ) : (
        <WrappedComponent {...props} />
      )
    ) : (
      <div className="loaderBox">
        <div className="loader" />
        Loading ...
      </div>
    );
  });
};

export default widthResolver;
