import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//
import { setAppLang } from "./services/languageManager";
import { configureStore } from "./services/stateManager/store";
import Storage from "./services/storageManager";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import { setStore } from "./utils/store";
import { setAuthorization } from "./services/stateManager/actions/auth";
//
const store = configureStore();
setStore(store);
// app language
const pathName = window.location.pathname;
const lang = pathName.split("/")[1];
setAppLang(lang);
//
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
