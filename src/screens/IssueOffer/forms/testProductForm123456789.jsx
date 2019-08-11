import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
//
import "./styles.scss";
import { submitIssueOffer } from "services/redux/offer/issueOffer/actions";
import { t } from "services/languageManager";
import { CircleSpinner } from "components";
//
const formSchema = Yup.object().shape({
  amount: Yup.number()
    .required(t("REQUIRED"))
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  interestRate: Yup.number().required(t("REQUIRED")),
  repaymentPeriod: Yup.number().required(t("REQUIRED")),
  monthlyRepaymentAmount: Yup.number().required(t("REQUIRED")),
  totalRepaymentAmount: Yup.number().required(t("REQUIRED")),
  startFee: Yup.number().required(t("REQUIRED")),
  cost: Yup.number().required(t("REQUIRED")),
  personalGuaranteeDetails: Yup.string().required(t("REQUIRED")),
  otherGuaranteeDetails: Yup.string().required(t("REQUIRED")),
  otherGuaranteesType: Yup.string().required(t("REQUIRED")),
  moreDetails: Yup.string().required(t("REQUIRED")),
  offerDescription: Yup.string().required(t("REQUIRED")),
  extraOfferDescription: Yup.string().required(t("REQUIRED"))
  // email: Yup.string()
  //   .email("Invalid email")
  //   .required("Required")
});
const Form = props => {
  function backToProducts() {
    if (props.onBackClicked) props.onBackClicked();
  }
  return (
    <div className="issueOfferForm animated fadeIn">
      <div className="issueOfferForm__body">
        <Formik
          initialValues={{
            amount: "",
            interestRate: "",
            repaymentPeriod: "",
            monthlyRepaymentAmount: "",
            totalRepaymentAmount: "",
            startFee: "",
            cost: "",
            personalGuaranteeNeeded: true,
            otherGuaranteeNeeded: true,
            personalGuaranteeDetails: "",
            otherGuaranteeDetails: "",
            otherGuaranteesType: "",
            moreDetails: "",
            offerDescription: "",
            extraOfferDescription: ""
          }}
          validationSchema={formSchema}
          // validate={values => {
          //   let errors = {};
          //   if (!values.email) {
          //     errors.email = "Required";
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = "Invalid email address";
          //   }

          //   if (!values.amount) {
          //     errors.amount = t("REQUIRED");
          //   }
          //   if (!values.interestRate) {
          //     errors.interestRate = t("REQUIRED");
          //   }
          //   if (!values.repaymentPeriod) {
          //     errors.repaymentPeriod = t("REQUIRED");
          //   }
          //   if (!values.monthlyRepaymentAmount) {
          //     errors.monthlyRepaymentAmount = t("REQUIRED");
          //   }
          //   if (!values.totalRepaymentAmount) {
          //     errors.totalRepaymentAmount = t("REQUIRED");
          //   }
          //   return errors;
          // }}
          onSubmit={(values, { setSubmitting }) => {
            if (props.submitIssueOffer) {
              let obj = {
                ...values,
                partnerID: "123456789",
                productName: "Test",
                productMasterID: "a0G5E000004w15VUAQ",
                oppID: "0065E00000DlPDaQAN"
              };
              props.submitIssueOffer(obj);
            }
          }}
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
                  <div className="formRow__column">
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
                          name="amount"
                          className="element"
                          placeholder={t("ISSUE_OFFER_AMOUNT_PLACEHOLDER")}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.amount}
                          autoFocus
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
                  <div className="formRow__column">
                    <div
                      className={
                        "formInput " +
                        (errors.interestRate &&
                        touched.interestRate &&
                        errors.interestRate
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
                          name="interestRate"
                          className="element"
                          placeholder={t(
                            "ISSUE_OFFER_INTEREST_RATE_PLACEHOLDER"
                          )}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.interestRate}
                        />
                      </div>
                      <div className="formInput__footer">
                        <div className="formInput__footer__left">
                          <span className="elementInfo">
                            {errors.interestRate &&
                              touched.interestRate &&
                              errors.interestRate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div className="formRow__column">
                    <div
                      className={
                        "formInput " +
                        (errors.repaymentPeriod &&
                        touched.repaymentPeriod &&
                        errors.repaymentPeriod
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
                          name="repaymentPeriod"
                          className="element"
                          placeholder={t(
                            "ISSUE_OFFER_REPAYMENT_PERIOD_PLACEHOLDER"
                          )}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.repaymentPeriod}
                        />
                      </div>
                      <div className="formInput__footer">
                        <div className="formInput__footer__left">
                          <span className="elementInfo">
                            {errors.repaymentPeriod &&
                              touched.repaymentPeriod &&
                              errors.repaymentPeriod}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="formRow__column">
                    <div
                      className={
                        "formInput " +
                        (errors.monthlyRepaymentAmount &&
                        touched.monthlyRepaymentAmount &&
                        errors.monthlyRepaymentAmount
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
                          name="monthlyRepaymentAmount"
                          className="element"
                          placeholder={t(
                            "ISSUE_OFFER_MONTHLY_REPAYMENT_AMOUNT_PLACEHOLDER"
                          )}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.monthlyRepaymentAmount}
                        />
                      </div>
                      <div className="formInput__footer">
                        <div className="formInput__footer__left">
                          <span className="elementInfo">
                            {errors.monthlyRepaymentAmount &&
                              touched.monthlyRepaymentAmount &&
                              errors.monthlyRepaymentAmount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div className="formRow__column">
                    <div
                      className={
                        "formInput " +
                        (errors.totalRepaymentAmount &&
                        touched.totalRepaymentAmount &&
                        errors.totalRepaymentAmount
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
                          name="totalRepaymentAmount"
                          className="element"
                          placeholder={t(
                            "ISSUE_OFFER_TOTAL_REPAYMENT_AMOUNT_PLACEHOLDER"
                          )}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.totalRepaymentAmount}
                        />
                      </div>
                      <div className="formInput__footer">
                        <div className="formInput__footer__left">
                          <span className="elementInfo">
                            {errors.totalRepaymentAmount &&
                              touched.totalRepaymentAmount &&
                              errors.totalRepaymentAmount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div className="formRow__column">
                    <div className="custom_checkbox">
                      <div className="left">
                        <label className="checkBox">
                          <input
                            type="checkbox"
                            id="personalGuaranteeNeededChk"
                            name="personalGuaranteeNeeded"
                            onChange={handleChange}
                            checked={values.personalGuaranteeNeeded}
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
                  <div className="formRow__column">
                    <div className="custom_checkbox">
                      <div className="left">
                        <label className="checkBox">
                          <input
                            type="checkbox"
                            id="otherGuaranteeNeededChk"
                            name="otherGuaranteeNeeded"
                            onChange={handleChange}
                            checked={values.otherGuaranteeNeeded}
                          />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="right">
                        <label htmlFor="otherGuaranteeNeededChk">
                          {t("ISSUE_OFFER_OFFER_OTHER_GUARANTEE_NEEDED")}
                        </label>
                        <label />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div className="formRow__column">
                    <div
                      className={
                        "formInput " +
                        (errors.startFee && touched.startFee && errors.startFee
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
                          name="startFee"
                          className="element"
                          placeholder={t("ISSUE_OFFER_START_FEE_PLACEHOLDER")}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.startFee}
                        />
                      </div>
                      <div className="formInput__footer">
                        <div className="formInput__footer__left">
                          <span className="elementInfo">
                            {errors.startFee &&
                              touched.startFee &&
                              errors.startFee}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="formRow__column">
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
                </div>
                <div className="formRow">
                  <div className="formRow__column">
                    <div
                      className={
                        "formInput " +
                        (errors.personalGuaranteeDetails &&
                        touched.personalGuaranteeDetails &&
                        errors.personalGuaranteeDetails
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
                          name="personalGuaranteeDetails"
                          className="element"
                          placeholder={t(
                            "ISSUE_OFFER_PERSONAL_GUARANTEE_DETAILS_PLACEHOLDER"
                          )}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.personalGuaranteeDetails}
                        />
                      </div>
                      <div className="formInput__footer">
                        <div className="formInput__footer__left">
                          <span className="elementInfo">
                            {errors.personalGuaranteeDetails &&
                              touched.personalGuaranteeDetails &&
                              errors.personalGuaranteeDetails}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="formRow__column">
                    <div
                      className={
                        "formInput " +
                        (errors.otherGuaranteeDetails &&
                        touched.otherGuaranteeDetails &&
                        errors.otherGuaranteeDetails
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
                          name="otherGuaranteeDetails"
                          className="element"
                          placeholder={t("ISSUE_OFFER_COST_PLACEHOLDER")}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.otherGuaranteeDetails}
                        />
                      </div>
                      <div className="formInput__footer">
                        <div className="formInput__footer__left">
                          <span className="elementInfo">
                            {errors.otherGuaranteeDetails &&
                              touched.otherGuaranteeDetails &&
                              errors.otherGuaranteeDetails}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div className="formRow__column">
                    <div
                      className={
                        "formInput " +
                        (errors.otherGuaranteesType &&
                        touched.otherGuaranteesType &&
                        errors.otherGuaranteesType
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
                          name="otherGuaranteesType"
                          className="element"
                          placeholder={t(
                            "ISSUE_OFFER_OTHER_GUARANTEES_TYPE_PLACEHOLDER"
                          )}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.otherGuaranteesType}
                        />
                      </div>
                      <div className="formInput__footer">
                        <div className="formInput__footer__left">
                          <span className="elementInfo">
                            {errors.otherGuaranteesType &&
                              touched.otherGuaranteesType &&
                              errors.otherGuaranteesType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="formRow__column">
                    <div
                      className={
                        "formInput " +
                        (errors.moreDetails &&
                        touched.moreDetails &&
                        errors.moreDetails
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
                          name="moreDetails"
                          className="element"
                          placeholder={t(
                            "ISSUE_OFFER_MORE_DETAILS_PLACEHOLDER"
                          )}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.moreDetails}
                        />
                      </div>
                      <div className="formInput__footer">
                        <div className="formInput__footer__left">
                          <span className="elementInfo">
                            {errors.moreDetails &&
                              touched.moreDetails &&
                              errors.moreDetails}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formRow">
                  <div className="formRow__column">
                    <div
                      className={
                        "formInput " +
                        (errors.offerDescription &&
                        touched.offerDescription &&
                        errors.offerDescription
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
                          name="offerDescription"
                          className="element"
                          placeholder={t(
                            "ISSUE_OFFER_OFFER_DESCRIPTION_PLACEHOLDER"
                          )}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.offerDescription}
                        />
                      </div>
                      <div className="formInput__footer">
                        <div className="formInput__footer__left">
                          <span className="elementInfo">
                            {errors.offerDescription &&
                              touched.offerDescription &&
                              errors.offerDescription}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="formRow__column">
                    <div
                      className={
                        "formInput " +
                        (errors.extraOfferDescription &&
                        touched.extraOfferDescription &&
                        errors.extraOfferDescription
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
                          name="extraOfferDescription"
                          className="element"
                          placeholder={t(
                            "ISSUE_OFFER_EXTRA_OFFER_DESCRIPTION_PLACEHOLDER"
                          )}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.extraOfferDescription}
                        />
                      </div>
                      <div className="formInput__footer">
                        <div className="formInput__footer__left">
                          <span className="elementInfo">
                            {errors.extraOfferDescription &&
                              touched.extraOfferDescription &&
                              errors.extraOfferDescription}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="issueOfferForm__actions">
                <button
                  type="submit"
                  className="btn --primary"
                  // disabled={isSubmitting}
                >
                  <CircleSpinner show={props.loading} />
                  {!props.loading && t("SUBMIT")}
                </button>
                <button className="btn --light" onClick={backToProducts}>
                  {t("ISSUE_OFFER_BACK_TO_PRODUCTS")}
                </button>
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
    loading: state.offer
      ? state.offer.issueOfferReducer
        ? state.offer.issueOfferReducer.loading
        : null
      : null
  };
}

const mapDispatchToProps = {
  submitIssueOffer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

// {
// 	"partnerID" : "123456789",
//     "productName": "Test",
//     "amount": 1, number input
//     "interestRate": 2, number input
//     "repaymentPeriod": 3,
//     "monthlyRepaymentAmount": 4,
//     "totalRepaymentAmount": 5,
//     "startFee": 6,
//     "cost": 7,
//     "personalGuaranteeNeeded": true, checkbox
//     "otherGuaranteeNeeded": true,
//     "personalGuaranteeDetails": "8",
//     "otherGuaranteeDetails": "9",
//     "otherGuaranteesType": "company car",
//     "moreDetails": "10",
//     "offerDescription": "11",
//     "extraOfferDescription": "12",
//     "productMasterID": "a0G5E000004w15VUAQ",
//     "oppID": "0065E00000DlPDaQAN"
// }
