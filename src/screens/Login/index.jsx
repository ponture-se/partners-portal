import React, { useState } from "react";
import { connect } from "react-redux";
//
import { CircleSpinner } from "./../../components";
import "./styles.scss";
import { t, currentLangName } from "./../../services/languageManager";
import { getToken } from "./../../api/account-api";
import { loginUser } from "./../../services/stateManager/actions/auth";

const Login = props => {
  const [spinner, toggleSpinner] = useState();
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleUsernameChanged(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChanged(e) {
    setPassword(e.target.value);
  }
  function handleLoginClicked(e) {
    e.preventDefault();
    if (!spinner) {
      toggleSpinner(true);
      getToken()
        .onOk(result => {
          toggleSpinner(false);
          if (result) {
            props.loginUser(result.access_token);
            props.history.replace(
              !props.location.state
                ? "/" + currentLangName + "/newApplications"
                : props.location.state.from.pathname
            );
          }
        })
        .onServerError(result => {
          toggleSpinner(false);
        })
        .onBadRequest(result => {
          toggleSpinner(false);
        })
        .unAuthorized(result => {
          toggleSpinner(false);
        })
        .notFound(result => {
          toggleSpinner(false);
        })
        .unKnownError(result => {
          toggleSpinner(false);
        })
        .onRequestError(result => {
          toggleSpinner(false);
        })
        .call(userName, password);
    }
  }

  return (
    <div className="loginContainer">
      <div className="loginHeader">
        <img src={require("./../../assets/logo-c.png")} alt="" />
      </div>
      <div className="loginBox">
        <h1 className="animated fadeIn">
          {t("LOGIN_TITLE1")}
          <br />
          {t("LOGIN_TITLE2")}
        </h1>
        <span className="animated fadeIn">{t("LOGIN_INFO")}</span>
        <form onSubmit={handleLoginClicked}>
          <div className="formInput animated fadeIn">
            <div className="formInput__body">
              <input
                type="text"
                className="element"
                placeholder={t("LOGIN_USERNAME_INPUT_PLACEHOLDER")}
                autoFocus
                value={userName}
                onChange={handleUsernameChanged}
              />
            </div>
          </div>
          <div className="formInput animated fadeIn">
            <div className="formInput__body">
              <input
                type="password"
                className="element"
                placeholder={t("LOGIN_PASSWORD_INPUT_PLACEHOLDER")}
                value={password}
                onChange={handlePasswordChanged}
              />
            </div>
          </div>
          <button
            className="btn --primary animated fadeIn"
            disabled={
              !(
                userName &&
                userName.length > 0 &&
                password &&
                password.length > 6
              )
            }
          >
            {!spinner ? t("LOGIN_BTN_NAME") : <CircleSpinner show={true} />}
          </button>
        </form>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
