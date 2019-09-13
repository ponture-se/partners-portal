import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//
import store from "./services/redux/store";
import { setAppLang } from "./services/languageManager";
import Storage from "./services/storageManager";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import { setAuthorization, setUser } from "./services/redux/auth/actions";

// app language
const pathName = window.location.pathname;
const lang = pathName.split("/")[1];
setAppLang(lang);
// check localStorage to grab token
const token = sessionStorage.getItem("@ponture-partners/token");
const userInfo = sessionStorage.getItem("@ponture-partners/userInfo");
if (token) {
  setAuthorizationToken(token);
  store.dispatch(setAuthorization(true));
}
if (userInfo) {
  try {
    const u = JSON.parse(userInfo);
    store.dispatch(setUser(u));
  } catch (error) {
    console.log();
  }
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
