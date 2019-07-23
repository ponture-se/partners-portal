import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useTheme, useLocale, useLayout } from "./hooks";
//
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
  // useLayout("ltr");
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          key="login"
          path="/:lang/login"
          render={props => <Login {...props} />}
        />
        <PrivateRoute
          key="mainPage"
          path="/:lang"
          render={props => <Main {...props} />}
        />
        <Redirect from="/" to={`/${currentLangName}/newApplications`} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
