import React, { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./../../HOCs/PrivateRoute";
//
import "./styles.scss";
import Header from "./header";
const NewApplications = lazy(() => import("./../NewApplications"));
const OpenedApplications = lazy(() => import("./../OpenedApplications"));
const ViewApplication = lazy(() => import("./../ViewApplication"));
const MyOffers = lazy(() => import("./../MyOffers"));
const AcceptedOffers = lazy(() => import("./../AcceptedOffers"));
const FundedApplications = lazy(() => import("./../FundedApplications"));
const LostApplications = lazy(() => import("./../LostApplications"));
const IssueOffer = lazy(() => import("./../IssueOffer"));
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
              key="viewApplications"
              path="/:lang/viewApplication/:id"
              render={props => <ViewApplication {...props} />}
            />
            <PrivateRoute
              exact
              key="myOffers"
              path="/:lang/myOffers"
              render={props => <MyOffers {...props} />}
            />
            <PrivateRoute
              exact
              key="acceptedOffers"
              path="/:lang/acceptedOffers"
              render={props => <AcceptedOffers {...props} />}
            />
            <PrivateRoute
              exact
              key="fundedApplications"
              path="/:lang/fundedApplications"
              render={props => <FundedApplications {...props} />}
            />
            <PrivateRoute
              exact
              key="lostApplications"
              path="/:lang/lostApplications"
              render={props => <LostApplications {...props} />}
            />
            <PrivateRoute
              exact
              key="issueOffer"
              path="/:lang/issueOffer/:appId"
              render={props => <IssueOffer {...props} />}
            />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default MainPage;
