import React, { useEffect } from "react";
import { connect } from "react-redux";
//
import { viewCreditReport } from "services/redux/application/creditReport/actions";
import "./styles.scss";
import SquareSpinner from "components/SquareSpinner";
import Modal from "components/Modal";
import Wrong from "components/Commons/ErrorsComponent/Wrong";
import { t } from "services/languageManager";

const CreditReport = props => {
  useEffect(() => {
    // if (props.viewCreditReport) {
    //   props.viewCreditReport(
    //     props.app
    //       ? props.app.opportunityID
    //         ? props.app.opportunityID
    //         : null
    //       : null
    //   );
    // }
  }, []);

  function closeModal() {
    if (props.onClose) {
      props.onClose();
    }
  }
  return (
    <Modal size="large" onClose={closeModal}>
      <div className="creditReport">
        <div className="creditReport__header">
          <span className="title">{t("CREDIT_REPORT")}</span>
          <span className="appName">({props.app && props.app.Name})</span>
          <span
            className="icon-cross creditReport__closeIcon"
            onClick={closeModal}
          />
        </div>
        <div className="creditReport_body">
          <div className="products">
            {props.loading ? (
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
            ) : null}
          </div>
        </div>
      </div>
    </Modal>
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
