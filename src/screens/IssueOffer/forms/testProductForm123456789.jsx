import React, { useMemo } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import mapValues from "lodash/mapValues";
//
import "./styles.scss";
import {
  submitIssueOffer,
  updateIssueOffer
} from "services/redux/offer/issueOffer/actions";
import { t } from "services/languageManager";
import { CircleSpinner } from "components";
// import DynamicForm from "./DynamicForm";
// import initValidations from "./validation";

const Form = props => {
  let v;
  const maximum_loan_amount = props.userInfo
    ? props.userInfo.rules
      ? props.userInfo.rules.maximum_loan_amount
      : undefined
    : undefined;
  const maximum_loan_period = props.userInfo
    ? props.userInfo.rules
      ? props.userInfo.rules.maximum_loan_period
      : undefined
    : undefined;
  const minimum_loan_amount = props.userInfo
    ? props.userInfo.rules
      ? props.userInfo.rules.minimum_loan_amount
      : 1
    : 1;
  const minimum_loan_period = props.userInfo
    ? props.userInfo.rules
      ? props.userInfo.rules.minimum_loan_period
      : 1
    : 1;
  const { offer } = props;
  function getCondition(prop) {
    let y = Yup;
    if (prop === "amount") {
      y = y.number().required(t("REQUIRED"));
      if (minimum_loan_amount) {
        y = y.min(
          minimum_loan_amount,
          t(`Value can not be less than ${minimum_loan_amount}`)
        );
      }
      if (maximum_loan_amount) {
        y = y.max(
          maximum_loan_amount,
          t(`Value can not be more than ${maximum_loan_amount}`)
        );
      }
    }
    if (prop === "repayment_period") {
      y = y.number().required(t("REQUIRED"));
      if (minimum_loan_period) {
        y = y.min(
          minimum_loan_period,
          t(`Value can not be less than ${minimum_loan_period}`)
        );
      }
      if (maximum_loan_period) {
        y = y.max(
          maximum_loan_period,
          t(`Value can not be more than ${maximum_loan_period}`)
        );
      }
    }
    return y;
  }
  const formSchema = Yup.object().shape({
    amount: getCondition("amount"),
    interest_rate: Yup.number()
      .required(t("REQUIRED"))
      .min(0, t("INPUT_NEGATIVE_VALUE")),
    repayment_period: getCondition("repayment_period"),
    monthly_repayment_amount: Yup.number()
      .required(t("REQUIRED"))
      .min(0, t("INPUT_NEGATIVE_VALUE")),
    total_repayment_amount: Yup.number()
      .required(t("REQUIRED"))
      .min(0, t("INPUT_NEGATIVE_VALUE")),
    start_fee: Yup.number().required(t("REQUIRED")),
    cost: Yup.number().required(t("REQUIRED")),
    personal_guarantee_needed: Yup.bool(),
    other_guarantees_needed: Yup.bool(),
    personal_guarantee_details: Yup.string(),
    number_of_personal_guarantees: Yup.number().min(
      0,
      t("INPUT_NEGATIVE_VALUE")
    ),
    other_guarantees_details: Yup.string(),
    other_guarantees_type: Yup.string(),
    more_details: Yup.string(),
    offer_description: Yup.string(),
    extra_offer_description: Yup.string()
  });
  const initVals = {
    amount: offer ? (offer.amount ? offer.amount : "") : "",
    interest_rate: offer
      ? offer.interest_rate
        ? offer.interest_rate
        : ""
      : "",
    repayment_period: offer
      ? offer.repayment_period
        ? offer.repayment_period
        : ""
      : "",
    monthly_repayment_amount: offer
      ? offer.monthly_repayment_amount
        ? offer.monthly_repayment_amount
        : ""
      : "",
    total_repayment_amount: offer
      ? offer.total_repayment_amount
        ? offer.total_repayment_amount
        : ""
      : "",
    start_fee: offer ? (offer.start_fee ? offer.start_fee : "") : "",
    cost: offer ? (offer.cost ? offer.cost : "") : "",
    personal_guarantee_needed: offer
      ? offer.personal_guarantee_needed
        ? offer.personal_guarantee_needed
        : true
      : true,
    other_guarantees_needed: offer
      ? offer.other_guarantees_needed
        ? offer.other_guarantees_needed
        : true
      : true,
    personal_guarantee_details: offer
      ? offer.personal_guarantee_details
        ? offer.personal_guarantee_details
        : ""
      : "",
    number_of_personal_guarantees: offer
      ? offer.number_of_personal_guarantees
        ? offer.number_of_personal_guarantees
        : ""
      : "",
    other_guarantees_details: offer
      ? offer.other_guarantees_details
        ? offer.other_guarantees_details
        : ""
      : "",
    other_guarantees_type: offer
      ? offer.other_guarantees_type
        ? offer.other_guarantees_type
        : ""
      : "",
    more_details: offer ? (offer.more_details ? offer.more_details : "") : "",
    offer_description: offer
      ? offer.offer_description
        ? offer.offer_description
        : ""
      : "",
    extra_offer_description: offer
      ? offer.extra_offer_description
        ? offer.extra_offer_description
        : ""
      : ""
  };
  function backToProducts() {
    if (props.onBackClicked) props.onBackClicked();
  }
  function handleSubmitOffer(values, { setSubmitting }) {
    if (props.submitIssueOffer) {
      let obj = {
        ...values
      };
      if (props.updateMode) {
        obj["offer_id"] = offer.offer_id;
        props.updateIssueOffer(obj, props.onSuccess);
      } else {
        obj["product_name"] = props.product ? props.product.Name : null;
        obj["partner_id"] = props.userInfo ? props.userInfo.partnerId : null;
        obj["opportunityID"] = props.app ? props.app.opportunityID : null;
        obj["product_master"] = props.product ? props.product.Id : null;
        props.submitIssueOffer(obj, props.onSuccess);
      }
    }
  }
  function closeModal() {
    if (props.onCloseModal) {
      props.onCloseModal();
    }
  }
  return (
    // <div className="issueOfferForm animated fadeIn">
    //   <div className="issueOfferForm__body">
    //     <DynamicForm fields={fields} validation={v} />
    //   </div>
    // </div>
    <div className="issueOfferForm animated fadeIn">
      <div className="issueOfferForm__body">
        <Formik
          initialValues={initVals}
          validationSchema={!props.viewMode && formSchema}
          onSubmit={handleSubmitOffer}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="issueOfferForm__content">
                <div className="formRow">
                  <div
                    className={
                      "formInput " +
                      (errors.amount && touched.amount && errors.amount
                        ? "--invalid"
                        : "")
                    }
                  >
                    <div className="formInput__header">
                      <div className="formInput__header__left">
                        <span className="elementTitle">
                          {t("ISSUE_OFFER_AMOUNT")}
                        </span>
                      </div>
                    </div>
                    <div className="formInput__body">
                      <input
                        type="number"
                        min="0"
                        name="amount"
                        className="element"
                        placeholder={t("ISSUE_OFFER_AMOUNT_PLACEHOLDER")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.amount}
                        autoFocus
                        readOnly={props.viewMode}
                      />
                    </div>
                    <div className="formInput__footer">
                      <div className="formInput__footer__left">
                        <span className="elementInfo">
                          {errors.amount && touched.amount && errors.amount}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div
                    className={
                      "formInput " +
                      (errors.interest_rate &&
                      touched.interest_rate &&
                      errors.interest_rate
                        ? "--invalid"
                        : "")
                    }
                  >
                    <div className="formInput__header">
                      <div className="formInput__header__left">
                        <span className="elementTitle">
                          {t("ISSUE_OFFER_INTEREST_RATE")}
                        </span>
                      </div>
                    </div>
                    <div className="formInput__body">
                      <input
                        type="number"
                        min="0"
                        name="interest_rate"
                        className="element"
                        placeholder={t("ISSUE_OFFER_INTEREST_RATE_PLACEHOLDER")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.interest_rate}
                        readOnly={props.viewMode}
                      />
                    </div>
                    <div className="formInput__footer">
                      <div className="formInput__footer__left">
                        <span className="elementInfo">
                          {errors.interest_rate &&
                            touched.interest_rate &&
                            errors.interest_rate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div
                    className={
                      "formInput " +
                      (errors.repayment_period &&
                      touched.repayment_period &&
                      errors.repayment_period
                        ? "--invalid"
                        : "")
                    }
                  >
                    <div className="formInput__header">
                      <div className="formInput__header__left">
                        <span className="elementTitle">
                          {t("ISSUE_OFFER_REPAYMENT_PERIOD")}
                        </span>
                      </div>
                    </div>
                    <div className="formInput__body">
                      <input
                        type="number"
                        min="0"
                        name="repayment_period"
                        className="element"
                        placeholder={t(
                          "ISSUE_OFFER_REPAYMENT_PERIOD_PLACEHOLDER"
                        )}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.repayment_period}
                        readOnly={props.viewMode}
                      />
                    </div>
                    <div className="formInput__footer">
                      <div className="formInput__footer__left">
                        <span className="elementInfo">
                          {errors.repayment_period &&
                            touched.repayment_period &&
                            errors.repayment_period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div
                    className={
                      "formInput " +
                      (errors.monthly_repayment_amount &&
                      touched.monthly_repayment_amount &&
                      errors.monthly_repayment_amount
                        ? "--invalid"
                        : "")
                    }
                  >
                    <div className="formInput__header">
                      <div className="formInput__header__left">
                        <span className="elementTitle">
                          {t("ISSUE_OFFER_MONTHLY_REPAYMENT_AMOUNT")}
                        </span>
                      </div>
                    </div>
                    <div className="formInput__body">
                      <input
                        type="number"
                        min="0"
                        name="monthly_repayment_amount"
                        className="element"
                        placeholder={t(
                          "ISSUE_OFFER_MONTHLY_REPAYMENT_AMOUNT_PLACEHOLDER"
                        )}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.monthly_repayment_amount}
                        readOnly={props.viewMode}
                      />
                    </div>
                    <div className="formInput__footer">
                      <div className="formInput__footer__left">
                        <span className="elementInfo">
                          {errors.monthly_repayment_amount &&
                            touched.monthly_repayment_amount &&
                            errors.monthly_repayment_amount}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div
                    className={
                      "formInput " +
                      (errors.total_repayment_amount &&
                      touched.total_repayment_amount &&
                      errors.total_repayment_amount
                        ? "--invalid"
                        : "")
                    }
                  >
                    <div className="formInput__header">
                      <div className="formInput__header__left">
                        <span className="elementTitle">
                          {t("ISSUE_OFFER_TOTAL_REPAYMENT_AMOUNT")}
                        </span>
                      </div>
                    </div>
                    <div className="formInput__body">
                      <input
                        type="number"
                        min="0"
                        name="total_repayment_amount"
                        className="element"
                        placeholder={t(
                          "ISSUE_OFFER_TOTAL_REPAYMENT_AMOUNT_PLACEHOLDER"
                        )}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.total_repayment_amount}
                        readOnly={props.viewMode}
                      />
                    </div>
                    <div className="formInput__footer">
                      <div className="formInput__footer__left">
                        <span className="elementInfo">
                          {errors.total_repayment_amount &&
                            touched.total_repayment_amount &&
                            errors.total_repayment_amount}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div className="custom_checkbox">
                    <div className="left">
                      <label className="checkBox">
                        <input
                          type="checkbox"
                          id="personalGuaranteeNeededChk"
                          name="personal_guarantee_needed"
                          onChange={handleChange}
                          checked={values.personal_guarantee_needed}
                          readOnly={props.viewMode}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="right">
                      <label htmlFor="personalGuaranteeNeededChk">
                        {t("ISSUE_OFFER_OFFER_PERSONAL_GUARANTEE_NEEDED")}
                      </label>
                      <label>{/* {t("FIELD_INVISIBLE_INFO")} */}</label>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div className="custom_checkbox">
                    <div className="left">
                      <label className="checkBox">
                        <input
                          type="checkbox"
                          id="other_guarantees_neededChk"
                          name="other_guarantees_needed"
                          onChange={handleChange}
                          checked={values.other_guarantees_needed}
                          readOnly={props.viewMode}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="right">
                      <label htmlFor="other_guarantees_neededChk">
                        {t("ISSUE_OFFER_OFFER_OTHER_GUARANTEE_NEEDED")}
                      </label>
                      <label />
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div
                    className={
                      "formInput " +
                      (errors.start_fee && touched.start_fee && errors.start_fee
                        ? "--invalid"
                        : "")
                    }
                  >
                    <div className="formInput__header">
                      <div className="formInput__header__left">
                        <span className="elementTitle">
                          {t("ISSUE_OFFER_START_FEE")}
                        </span>
                      </div>
                    </div>
                    <div className="formInput__body">
                      <input
                        type="number"
                        name="start_fee"
                        className="element"
                        placeholder={t("ISSUE_OFFER_START_FEE_PLACEHOLDER")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.start_fee}
                        readOnly={props.viewMode}
                      />
                    </div>
                    <div className="formInput__footer">
                      <div className="formInput__footer__left">
                        <span className="elementInfo">
                          {errors.start_fee &&
                            touched.start_fee &&
                            errors.start_fee}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div
                    className={
                      "formInput " +
                      (errors.cost && touched.cost && errors.cost
                        ? "--invalid"
                        : "")
                    }
                  >
                    <div className="formInput__header">
                      <div className="formInput__header__left">
                        <span className="elementTitle">
                          {t("ISSUE_OFFER_COST")}
                        </span>
                      </div>
                    </div>
                    <div className="formInput__body">
                      <input
                        type="number"
                        name="cost"
                        className="element"
                        placeholder={t("ISSUE_OFFER_COST_PLACEHOLDER")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cost}
                        readOnly={props.viewMode}
                      />
                    </div>
                    <div className="formInput__footer">
                      <div className="formInput__footer__left">
                        <span className="elementInfo">
                          {errors.cost && touched.cost && errors.cost}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div
                    className={
                      "formInput " +
                      (errors.personal_guarantee_details &&
                      touched.personal_guarantee_details &&
                      errors.personal_guarantee_details
                        ? "--invalid"
                        : "")
                    }
                  >
                    <div className="formInput__header">
                      <div className="formInput__header__left">
                        <span className="elementTitle">
                          {t("ISSUE_OFFER_PERSONAL_GUARANTEE_DETAILS")}
                        </span>
                      </div>
                    </div>
                    <div className="formInput__body">
                      <input
                        type="text"
                        name="personal_guarantee_details"
                        className="element"
                        placeholder={t(
                          "ISSUE_OFFER_PERSONAL_GUARANTEE_DETAILS_PLACEHOLDER"
                        )}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.personal_guarantee_details}
                        readOnly={props.viewMode}
                      />
                    </div>
                    <div className="formInput__footer">
                      <div className="formInput__footer__left">
                        <span className="elementInfo">
                          {errors.personal_guarantee_details &&
                            touched.personal_guarantee_details &&
                            errors.personal_guarantee_details}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div
                    className={
                      "formInput " +
                      (errors.number_of_personal_guarantees &&
                      touched.number_of_personal_guarantees &&
                      errors.number_of_personal_guarantees
                        ? "--invalid"
                        : "")
                    }
                  >
                    <div className="formInput__header">
                      <div className="formInput__header__left">
                        <span className="elementTitle">
                          {t("ISSUE_OFFER_NUMBER_OF_PERSONAL_GUARANTEES")}
                        </span>
                      </div>
                    </div>
                    <div className="formInput__body">
                      <input
                        type="number"
                        name="number_of_personal_guarantees"
                        className="element"
                        placeholder={t(
                          "ISSUE_OFFER_NUMBER_OF_PERSONAL_GUARANTEES_PLACEHOLDER"
                        )}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.number_of_personal_guarantees}
                        readOnly={props.viewMode}
                      />
                    </div>
                    <div className="formInput__footer">
                      <div className="formInput__footer__left">
                        <span className="elementInfo">
                          {errors.number_of_personal_guarantees &&
                            touched.number_of_personal_guarantees &&
                            errors.number_of_personal_guarantees}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="formRow">
                  <div
                    className={
                      "formInput " +
                      (errors.other_guarantees_details &&
                      touched.other_guarantees_details &&
                      errors.other_guarantees_details
                        ? "--invalid"
                        : "")
                    }
                  >
                    <div className="formInput__header">
                      <div className="formInput__header__left">
                        <span className="elementTitle">
                          {t("ISSUE_OFFER_OTHER_GUARANTEE_DETAILS")}
                        </span>
                      </div>
                    </div>
                    <div className="formInput__body">
                      <input
                        type="text"
                        name="other_guarantees_details"
                        className="element"
                        placeholder={t("ISSUE_OFFER_COST_PLACEHOLDER")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.other_guarantees_details}
                        readOnly={props.viewMode}
                      />
                    </div>
                    <div className="formInput__footer">
                      <div className="formInput__footer__left">
                        <span className="elementInfo">
                          {errors.other_guarantees_details &&
                            touched.other_guarantees_details &&
                            errors.other_guarantees_details}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div
                    className={
                      "formInput " +
                      (errors.other_guarantees_type &&
                      touched.other_guarantees_type &&
                      errors.other_guarantees_type
                        ? "--invalid"
                        : "")
                    }
                  >
                    <div className="formInput__header">
                      <div className="formInput__header__left">
                        <span className="elementTitle">
                          {t("ISSUE_OFFER_OTHER_GUARANTEES_TYPE")}
                        </span>
                      </div>
                    </div>
                    <div className="formInput__body">
                      <input
                        type="text"
                        name="other_guarantees_type"
                        className="element"
                        placeholder={t(
                          "ISSUE_OFFER_OTHER_GUARANTEES_TYPE_PLACEHOLDER"
                        )}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.other_guarantees_type}
                        readOnly={props.viewMode}
                      />
                    </div>
                    <div className="formInput__footer">
                      <div className="formInput__footer__left">
                        <span className="elementInfo">
                          {errors.other_guarantees_type &&
                            touched.other_guarantees_type &&
                            errors.other_guarantees_type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div
                    className={
                      "formInput " +
                      (errors.more_details &&
                      touched.more_details &&
                      errors.more_details
                        ? "--invalid"
                        : "")
                    }
                  >
                    <div className="formInput__header">
                      <div className="formInput__header__left">
                        <span className="elementTitle">
                          {t("ISSUE_OFFER_MORE_DETAILS")}
                        </span>
                      </div>
                    </div>
                    <div className="formInput__body">
                      <input
                        type="text"
                        name="more_details"
                        className="element"
                        placeholder={t("ISSUE_OFFER_MORE_DETAILS_PLACEHOLDER")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.more_details}
                        readOnly={props.viewMode}
                      />
                    </div>
                    <div className="formInput__footer">
                      <div className="formInput__footer__left">
                        <span className="elementInfo">
                          {errors.more_details &&
                            touched.more_details &&
                            errors.more_details}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div
                    className={
                      "formInput " +
                      (errors.offer_description &&
                      touched.offer_description &&
                      errors.offer_description
                        ? "--invalid"
                        : "")
                    }
                  >
                    <div className="formInput__header">
                      <div className="formInput__header__left">
                        <span className="elementTitle">
                          {t("ISSUE_OFFER_OFFER_DESCRIPTION")}
                        </span>
                      </div>
                    </div>
                    <div className="formInput__body">
                      <input
                        type="text"
                        name="offer_description"
                        className="element"
                        placeholder={t(
                          "ISSUE_OFFER_OFFER_DESCRIPTION_PLACEHOLDER"
                        )}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.offer_description}
                        readOnly={props.viewMode}
                      />
                    </div>
                    <div className="formInput__footer">
                      <div className="formInput__footer__left">
                        <span className="elementInfo">
                          {errors.offer_description &&
                            touched.offer_description &&
                            errors.offer_description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div
                    className={
                      "formInput " +
                      (errors.extra_offer_description &&
                      touched.extra_offer_description &&
                      errors.extra_offer_description
                        ? "--invalid"
                        : "")
                    }
                  >
                    <div className="formInput__header">
                      <div className="formInput__header__left">
                        <span className="elementTitle">
                          {t("ISSUE_OFFER_EXTRA_OFFER_DESCRIPTION")}
                        </span>
                      </div>
                    </div>
                    <div className="formInput__body">
                      <input
                        type="text"
                        name="extra_offer_description"
                        className="element"
                        placeholder={t(
                          "ISSUE_OFFER_EXTRA_OFFER_DESCRIPTION_PLACEHOLDER"
                        )}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.extra_offer_description}
                        readOnly={props.viewMode}
                      />
                    </div>
                    <div className="formInput__footer">
                      <div className="formInput__footer__left">
                        <span className="elementInfo">
                          {errors.extra_offer_description &&
                            touched.extra_offer_description &&
                            errors.extra_offer_description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="issueOfferForm__actions">
                {!props.viewMode && (
                  <button type="submit" className="btn --primary">
                    <CircleSpinner show={props.loading} />
                    {!props.loading && t("SUBMIT")}
                  </button>
                )}
                {!props.viewMode && !props.updateMode && (
                  <button className="btn --light" onClick={backToProducts}>
                    {t("ISSUE_OFFER_BACK_TO_PRODUCTS")}
                  </button>
                )}
                {props.viewMode && (
                  <button className="btn --warning" onClick={closeModal}>
                    {t("CLOSE")}
                  </button>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userInfo: state.authReducer ? state.authReducer.userInfo : {},
    loading: state.offer
      ? state.offer.issueOfferReducer
        ? state.offer.issueOfferReducer.loading
        : null
      : null
  };
}

const mapDispatchToProps = {
  submitIssueOffer,
  updateIssueOffer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

// function getValidationSchema(values) {
//   return Yup.object().shape({
//     email: Yup.string()
//       .email("E-mail is not valid!")
//       .required("E-mail is required!"),
//     password: Yup.string()
//       .min(6, "Password has to be longer than 6 characters!")
//       .required("Password is required!"),
//     passwordConfirmation: Yup.string()
//       .oneOf([values.password], "Passwords are not the same!")
//       .required("Password confirmation is required!"),
//     consent: Yup.bool()
//       .test(
//         "consent",
//         "You have to agree with our Terms and Conditions!",
//         value => value === true
//       )
//       .required("You have to agree with our Terms and Conditions!")
//   });
// }

// const fields = [
//   {
//     name: "amount",
//     type: "number",
//     title: {
//       en: "Amount"
//     },
//     isFocus: true,
//     isRequired: true
//   },
//   {
//     name: "interestRate",
//     type: "number",
//     title: {
//       en: "Interest Rate"
//     },
//     isRequired: true
//   },
//   {
//     name: "repaymentPeriod",
//     type: "number",
//     title: {
//       en: "Repayment Period"
//     },
//     isRequired: true
//   },
//   {
//     name: "monthlyRepaymentAmount",
//     type: "number",
//     title: {
//       en: "Monthly Repayment Amount"
//     },
//     isRequired: true
//   },
//   {
//     name: "totalRepaymentAmount",
//     type: "number",
//     title: {
//       en: "Total Repayment Amount"
//     },
//     isRequired: true
//   },
//   {
//     name: "startFee",
//     type: "number",
//     title: {
//       en: "Start Fee"
//     },
//     isRequired: true
//   },
//   {
//     name: "cost",
//     type: "number",
//     title: {
//       en: "Cost"
//     },
//     isRequired: true
//   },
//   {
//     name: "personalGuaranteeNeeded",
//     type: "boolean",
//     title: {
//       en: "Personal Guarantee Needed"
//     },
//     defaultValue: true
//   },
//   {
//     name: "other_guarantee_needed",
//     type: "boolean",
//     title: {
//       en: "Other Guarantee Needed"
//     },
//     defaultValue: true
//   },
//   {
//     name: "personal_guarantee_details",
//     type: "string",
//     title: {
//       en: "Personal Guarantee Details"
//     }
//   },
//   {
//     name: "other_guarantees_details",
//     type: "string",
//     title: {
//       en: "Other Guarantee Details"
//     }
//   },
//   {
//     name: "other_guarantees_type",
//     type: "string",
//     title: {
//       en: "Other Guarantees Type"
//     }
//   },
//   {
//     name: "more_details",
//     type: "string",
//     title: {
//       en: "More Details"
//     }
//   },
//   {
//     name: "offer_description",
//     type: "string",
//     title: {
//       en: "Offer Description"
//     }
//   },
//   {
//     name: "extra_offer_description",
//     type: "string",
//     title: {
//       en: "Extra Offer Description"
//     }
//   }
// ];

// useMemo(() => {
//   v = initValidations(fields);
// }, []);
