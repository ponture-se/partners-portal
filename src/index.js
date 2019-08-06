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
import { setAuthorization } from "./services/redux/auth/actions";

// app language
const pathName = window.location.pathname;
const lang = pathName.split("/")[1];
setAppLang(lang);
// check localStorage to grab token
const token = Storage.get("p_token");
if (token) {
  setAuthorizationToken(token);
  store.dispatch(setAuthorization(true));
}
//

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
