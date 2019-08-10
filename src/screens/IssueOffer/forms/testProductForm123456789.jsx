import React from "react";
import { Formik } from "formik";
//
import "./styles.scss";
import { t } from "services/languageManager";
//
const Form = props => {
  function backToProducts() {
    if (props.backToProducts) props.backToProducts();
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
            totalRepaymentAmount: ""
          }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.amount) {
              errors.amount = t("REQUIRED");
            }
            if (!values.interestRate) {
              errors.interestRate = t("REQUIRED");
            }
            if (!values.repaymentPeriod) {
              errors.repaymentPeriod = t("REQUIRED");
            }
            if (!values.monthlyRepaymentAmount) {
              errors.monthlyRepaymentAmount = t("REQUIRED");
            }
            if (!values.totalRepaymentAmount) {
              errors.totalRepaymentAmount = t("REQUIRED");
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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
              </div>
              <div className="issueOfferForm__actions">
                <button
                  type="submit"
                  className="btn --primary"
                  disabled={isSubmitting}
                >
                  {t("SUBMIT")}
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
export default Form;
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
