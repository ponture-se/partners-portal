import React, { useEffect } from "react";
import { connect } from "react-redux";
//
import { viewCreditReport } from "services/redux/application/creditReport/actions";
import ReportItem from "./reportItem";
import SquareSpinner from "components/SquareSpinner";
import Wrong from "components/Commons/ErrorsComponent/Wrong";
import { t } from "services/languageManager";
//
const CreditReport = props => {
  useEffect(() => {
    if (props.viewCreditReport) {
      const orgNumber = props.match.params.orgNumber
        ? props.match.params.orgNumber
        : null;
      props.viewCreditReport(orgNumber);
    }
  }, []);
  return props.loading ? (
    <div className="page-loading">
      <SquareSpinner />
      <h2>{t("CREDIT_REPORT_LOADING_TEXT")}</h2>
    </div>
  ) : props.error ? (
    <div className="page-list-error animated fadeIn">
      <Wrong />
      <h2>{props.error && props.error.title}</h2>
      <span>{props.error && props.error.message}</span>
    </div>
  ) : (
    props.data && (
      <div className="creditReportPage">
        <ReportItem data={props.data} />
      </div>
    )
  );
};

const mapStateToProps = state => {
  return {
    loading: state.application
      ? state.application.creditReport
        ? state.application.creditReport.loading
        : null
      : null,
    data: state.application
      ? state.application.creditReport
        ? state.application.creditReport.data
        : null
      : null,
    error: state.application
      ? state.application.creditReport
        ? state.application.creditReport.error
        : null
      : null
  };
};

const mapDispatchToProps = {
  viewCreditReport
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditReport);
