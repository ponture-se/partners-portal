import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { t } from "services/languageManager";
import Modal from "components/Modal";
import CircleSpinner from "components/CircleSpinner";
import { _signLoanAsFunded } from "services/redux/offer/myOffers/actions";
import { Formik } from "formik";
import * as Yup from "yup";
import { Double, Integer } from "components/Form";
import "./styles.scss";

function FundedApp({ app, offer = {}, onClose, _signLoanAsFunded }) {
  function closeModal() {
    if (onClose) onClose();
  }
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    _signLoanAsFunded(
      offer.Id,
      values.loanAmount,
      values.loanPeriod,
      () => {
        if (onClose) onClose(true);
      },
      () => {
        setSubmitting(false);
      }
    );
  };

  const schema = Yup.object().shape({
    loanAmount: Yup.number().required("Required"),
    loanPeriod: Yup.number().required("Required"),
  });
  return (
    <Modal size="md" onClose={closeModal}>
      <div className="rejectApp">
        <div className="rejectApp__header">
          <div className="title">
            <span>{t("APP_SIGN_LOAN_FUNDED_MODAL_TITLE")}</span>
            {app && (
              <span>
                {app.Name
                  ? app.Name + " - " + app.opportunityNumber
                  : app.opportunityNumber}
              </span>
            )}
          </div>
          <div className="closeIcon" onClick={closeModal}>
            <span className="icon-cross" />
          </div>
        </div>
        <div className="rejectApp__body">
          <h4 className="fundedAppTitle">
            {t("ISSUE_OFFER_SIGN_AS_FUNDED_TITLE")}
          </h4>
          <span className="fundedAppDesc">
            {t("ISSUE_OFFER_SIGN_AS_FUNDED_DESC")}
          </span>
          <Formik
            initialValues={{
              loanAmount: offer.Amount,
              loanPeriod: offer.Loan_Period,
            }}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              isValid,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} id="submitForm">
                <Double
                  field={{ apiName: "loanAmount", label: "Loan Amount" }}
                  viewMode={false}
                  index={1}
                  defaultValue={offer.loanAmount}
                />
                <Integer
                  field={{ apiName: "loanPeriod", label: "Loan Period" }}
                  viewMode={false}
                  index={2}
                  defaultValue={offer.loanPEriod}
                />
                <div className="rejectApp__footer">
                  <button
                    className="btn --light"
                    onClick={closeModal}
                    disabled={isSubmitting}
                  >
                    {t("NO")}
                  </button>
                  <button
                    className="btn --success"
                    disabled={!schema.isValidSync(values)}
                  >
                    {isSubmitting ? (
                      <CircleSpinner show={true} />
                    ) : (
                      t("ISSUE_OFFER_SIGN_AS_FUNDED_OK_BTN")
                    )}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
}

function mapStateToProps(state) {
  return {
    userInfo: state.authReducer ? state.authReducer.userInfo : {},
  };
}

const mapDispatchToProps = {
  _signLoanAsFunded,
};

export default connect(mapStateToProps, mapDispatchToProps)(FundedApp);
