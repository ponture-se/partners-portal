import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setUser } from "../services/redux/auth/actions";
//
const widthResolver = WrappedComponent => {
  function mapStateToProps(state) {
    return {
      userInfo: state.authReducer.userInfo
    };
  }

  const mapDispatchToProps = {
    setUser
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(props => {
    return <WrappedComponent {...props} />;
    // const [loading] = useState(props.userInfo ? false : true);
    // return loading ? (
    //   <div className="loaderBox">
    //     <div className="loader" />
    //     Loading ...
    //   </div>
    // ) : (
    //   <WrappedComponent {...props} />
    // );
  });
};

export default widthResolver;
