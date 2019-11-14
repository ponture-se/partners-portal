import React, { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "HOCs/PrivateRoute";
import retry from "utils/retryLazyLoad";
//
import "./styles.scss";
import Header from "./header";
const NewApplications = lazy(() => retry(() => import("./../NewApplications")));
const OpenedApplications = lazy(() =>
  retry(() => import("./../OpenedApplications"))
);
const MyOffers = lazy(() => retry(() => import("./../MyOffers")));
const AcceptedOffers = lazy(() => retry(() => import("./../AcceptedOffers")));
const FundedApplications = lazy(() =>
  retry(() => import("./../FundedApplications"))
);
const LostApplications = lazy(() =>
  retry(() => import("./../LostApplications"))
);
const CreditReport = lazy(() => retry(() => import("./../CreditReport")));
//
const MainPage = props => {
  const { location } = props;
  const isCreditReport =
    location.pathname.split("/").pop() === "creditReport" ? true : false;
  return (
    <div className="mainPage">
      {!isCreditReport && <Header />}
      <div
        className="mainPage__content"
        style={{ marginTop: isCreditReport ? 0 : 100 }}
      >
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
              key="creditReport"
              path="/:lang/:orgNumber/creditReport"
              render={props => <CreditReport {...props} />}
            />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default MainPage;
