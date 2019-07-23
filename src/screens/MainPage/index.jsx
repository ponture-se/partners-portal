import React, { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./../../HOCs/PrivateRoute";
//
import "./styles.scss";
import Header from "./header";
const NewApplications = lazy(() => import("./../NewApplications"));
const OpenedApplications = lazy(() => import("./../OpenedApplications"));
const ViewApplication = lazy(() => import("./../ViewApplication"));
//
const MainPage = props => {
  return (
    <div className="mainPage">
      <Header />
      <div className="mainPage__content">
        <Suspense fallback={<div />}>
          <Switch>
            <PrivateRoute
              exact
              key="newApplications"
              path="/:lang/newApplications"
              render={props => <NewApplications {...props} />}
            />
            <PrivateRoute
              exact
              key="openedApplications"
              path="/:lang/openedApplications"
              render={props => <OpenedApplications {...props} />}
            />
            <PrivateRoute
              exact
              key="openedApplications"
              path="/:lang/viewApplication/:id"
              render={props => <ViewApplication {...props} />}
            />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default MainPage;
