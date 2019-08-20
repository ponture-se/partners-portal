import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import { useTheme } from "./hooks";
import { currentLangName } from "./services/languageManager";
import "./styles/app.scss";
import "./styles/animate.css";
//
import PrivateRoute from "./HOCs/PrivateRoute";
import withResolver from "./HOCs/withResolver";
import Login from "./screens/Login";
import MainPage from "./screens/MainPage";

const Main = withResolver(MainPage);

function App() {

  useTheme("theme1");
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            key="login"
            path="/:lang/login"
            render={props => <Login {...props} />}
          />
          <Redirect
            from="/:lang"
            to={`/${currentLangName}/newApplications`}
            exact
          />
          <Redirect from="/" to={`/${currentLangName}/newApplications`} exact />
          <PrivateRoute
            key="mainPage"
            path="/:lang"
            render={props => <Main {...props} />}
          />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
