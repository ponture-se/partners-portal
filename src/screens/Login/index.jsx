import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
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
          toast.error(t("INTERNAL_SERVER_ERROR"));
        })
        .onBadRequest(result => {
          toggleSpinner(false);
          toast.error(t("BAD_REQUEST"));
        })
        .notFound(result => {
          toggleSpinner(false);
          toast.error(t("NOT_FOUND"));
        })
        .unKnownError(result => {
          toggleSpinner(false);
          toast.error(t("UNKNOWN_ERROR"));
        })
        .onRequestError(result => {
          toggleSpinner(false);
          toast.error(t("ON_REQUEST_ERROR"));
        })
        .call(userName, password);
    }
  }

  return (
    <div className="loginContainer">
      <div className="loginHeader">
        <img src={require("./../../assets/logo-c.png")} alt="" />
      </div>
      <div className="loginBox animated fadeIn">
        <div className="loginBox__header">
          <span>{t("LOGIN_TITLE")}</span>
          <span>{t("LOGIN_INFO")}</span>
        </div>
        <form onSubmit={handleLoginClicked}>
          <div className="formInput">
            <div className="formInput__header">
              <div className="formInput__header__left">
                {t("LOGIN_USERNAME")}
              </div>
            </div>
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
            <div className="formInput__footer">
              <div className="formInput__footer__left">
                <span className="elementInfo">{t("LOGIN_USERNAME_INFO")}</span>
              </div>
            </div>
          </div>
          <div className="formInput">
            <div className="formInput__header">
              <div className="formInput__header__left">
                {t("LOGIN_PASSWORD")}
              </div>
            </div>
            <div className="formInput__body">
              <input
                type="password"
                className="element"
                placeholder={t("LOGIN_PASSWORD_INPUT_PLACEHOLDER")}
                value={password}
                onChange={handlePasswordChanged}
              />
            </div>
            <div className="formInput__footer">
              <div className="formInput__footer__left">
                <span className="elementInfo">{t("LOGIN_PASSWORD_INFO")}</span>
              </div>
            </div>
          </div>
          <button
            className="btn --primary"
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
