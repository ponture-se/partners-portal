import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import "./styles.scss";
import { logoutUser } from "./../../../services/stateManager/actions/auth";
import { t, currentLangName } from "./../../../services/languageManager";

const Header = props => {
  function handleSignout() {
    // props.history.push("login");
    props.logoutUser();
  }
  return (
    <div className="mainHeader">
      <div className="mainHeader__top">
        <div className="mainHeader__img">
          <img src={require("./../../../assets/logo-c.png")} alt="logo" />
        </div>
        <div className="mainHeader__userInfo">
          {props.userInfo &&
            props.userInfo.firstName + " " + props.userInfo.lastName}
        </div>
        <div className="mainHeader__signout" onClick={handleSignout}>
          <span>{t("SIGN_OUT")}</span>
          <i className="icon-sign-out" />
        </div>
      </div>
      <div className="mainHeader__bottom">
        <div className="tabItem">
          <NavLink
            to={`/${currentLangName}/newApplications`}
            className="navLink"
            activeClassName="active"
          >
            <span>{t("HEADER_TABS_FIRST")}</span>
          </NavLink>
        </div>
        <div className="tabItem">
          <NavLink
            to={`/${currentLangName}/openedApplications`}
            className="navLink"
            activeClassName="active"
          >
            <span>{t("HEADER_TABS_SECOND")}</span>
          </NavLink>
        </div>
        <div className="tabItem">
          <NavLink
            to={`/${currentLangName}/myOffers`}
            className="navLink"
            activeClassName="active"
          >
            <span>{t("HEADER_TABS_THIRD")}</span>
          </NavLink>
        </div>
        <div className="tabItem">
          <NavLink
            to={`/${currentLangName}/acceptedOffers`}
            className="navLink"
            activeClassName="active"
          >
            <span>{t("HEADER_TABS_FOURTH")}</span>
          </NavLink>
        </div>
        <div className="tabItem">
          <NavLink
            to={`/${currentLangName}/fundedApplications`}
            className="navLink"
            activeClassName="active"
          >
            <span>{t("HEADER_TABS_FIFTH")}</span>
          </NavLink>
        </div>
        <div className="tabItem">
          <NavLink
            to={`/${currentLangName}/lostApplications`}
            className="navLink"
            activeClassName="active"
          >
            <span>{t("HEADER_TABS_SIXTH")}</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    userInfo: state.authReducer.userInfo
  };
}

const mapDispatchToProps = {
  logoutUser
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
