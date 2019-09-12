import React, { useState, useMemo, useEffect } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import {
  Number,
  String,
  Boolean,
  Double,
  Currency,
  TextArea
} from "components/Form";
import Wrong from "components/Commons/ErrorsComponent/Wrong";
//
import "./styles.scss";
import {
  submitIssueOffer,
  updateIssueOffer,
  loadColumns
} from "services/redux/offer/issueOffer/actions";
import { t } from "services/languageManager";
import { CircleSpinner } from "components";
import initValidations from "./validation";
//
const Form = props => {
  let initialValues;
  const { offer } = props;
  const [validations, setValidations] = useState();
  useEffect(() => {
    if (props.loadColumns) props.loadColumns();
  }, []);

  function backToProducts() {
    if (props.onBackClicked) props.onBackClicked();
  }
  function checkCurrencyValues(obj) {
    for (let i = 0; i < props.columns.length; i++) {
      const col = props.columns[i];
      if (col.type.toLowerCase() === "currency") {
        for (const key in obj) {
          if (obj[key] && key === col.apiName) {
            obj[key] = obj[key].split(" ").join("");
            break;
          }
        }
      }
    }
    return obj;
  }
  function handleSubmitOffer(values, { setSubmitting }) {
    if (!props.loading) {
      if (props.submitIssueOffer) {
        let obj = {
          ...values
        };
        const finalObj = checkCurrencyValues(obj);
        if (props.updateMode) {
          finalObj["offer_id"] = offer.Id;
          props.updateIssueOffer(finalObj, props.onSuccess);
        } else {
          finalObj["partner_id"] = props.userInfo
            ? props.userInfo.partnerId
            : null;
          finalObj["opportunityID"] = props.app
            ? props.app.opportunityID
            : null;
          finalObj["product_master"] = props.product ? props.product.Id : null;
          props.submitIssueOffer(finalObj, props.onSuccess);
        }
      }
    }
  }
  function closeModal() {
    if (props.onCloseModal) {
      props.onCloseModal();
    }
  }
  function renderColumns() {
    return (
      props.columns &&
      props.columns.map((f, index) => {
        const type = f.type.toLowerCase();
        if (type === "string")
          return (
            <div className="formRow" key={f.apiName}>
              <String field={f} viewMode={props.viewMode} index={index} />
            </div>
          );
        if (type === "textarea")
          return (
            <div className="formRow" key={f.apiName}>
              <TextArea field={f} viewMode={props.viewMode} index={index} />
            </div>
          );
        if (type === "number")
          return (
            <div className="formRow" key={f.apiName}>
              <Number
                field={f}
                viewMode={props.viewMode}
                index={index}
                index={index}
              />
            </div>
          );
        if (type === "double")
          return (
            <div className="formRow" key={f.apiName}>
              <Double field={f} viewMode={props.viewMode} index={index} />
            </div>
          );
        if (type === "currency")
          return (
            <div className="formRow" key={f.apiName}>
              <Currency field={f} viewMode={props.viewMode} index={index} />
            </div>
          );
        if (type === "boolean")
          return (
            <div className="formRow" key={f.apiName}>
              <Boolean field={f} viewMode={props.viewMode} index={index} />
            </div>
          );
        return (
          <div className="formRow" key={f.apiName}>
            <String field={f} viewMode={props.viewMode} index={index} />
          </div>
        );
        return null;
      })
    );
  }
  function getInitialValues(renderColumns) {
    if (!renderColumns) return {};
    const initialValues = {};
    renderColumns.forEach(c => {
      if (c.apiName) {
        if (!initialValues[c.apiName]) {
          initialValues[c.apiName] = offer
            ? offer[c.apiName]
              ? offer[c.apiName]
              : offer.partnerDetails && offer.partnerDetails[c.apiName]
              ? offer.partnerDetails[c.apiName]
              : ""
            : "";
        }
      }
    });
    return initialValues;
  }
  initialValues = getInitialValues(props.columns);

  useMemo(() => {
    if (props.columns && !props.viewMode) {
      setValidations(initValidations(props.columns));
    }
  }, [props.columns]);
  return (
    <div className="issueOfferForm animated fadeIn">
      <div className="issueOfferForm__body">
        {props.columnsLoading ? (
          <div className="fallback">
            <CircleSpinner show={true} bgColor="rgb(23, 145, 164)" />
            <h6>{t("LOADING_FORM")}</h6>
          </div>
        ) : props.columnsError ? (
          <div className="issueOfferError animated fadeIn">
            <Wrong width="150" height="150" />
            <h2>{props.columnsError && props.columnsError.title}</h2>
            <span>{props.columnsError && props.columnsError.message}</span>
          </div>
        ) : (
          <Formik
            onSubmit={handleSubmitOffer}
            validationSchema={!props.viewMode && validations}
            initialValues={initialValues}
            render={form => {
              return (
                <div>
                  <form onSubmit={form.handleSubmit}>
                    <div className="issueOfferForm__content">
                      {renderColumns()}
                    </div>
                    <div className="issueOfferForm__actions">
                      {!props.viewMode && (
                        <>
                          <button type="submit" className="btn --primary">
                            <CircleSpinner show={props.loading} />
                            {!props.loading && t("SUBMIT")}
                          </button>
                          <button
                            className="btn --primary"
                            onClick={closeModal}
                          >
                            {t("CANCEL")}
                          </button>
                        </>
                      )}
                      {!props.viewMode && !props.updateMode && (
                        <button
                          className="btn --light"
                          onClick={backToProducts}
                        >
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
                </div>
              );
            }}
          />
        )}
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
      : null,
    columnsLoading: state.offer
      ? state.offer.issueOfferReducer
        ? state.offer.issueOfferReducer.columnsLoading
        : null
      : null,
    columns: state.offer
      ? state.offer.issueOfferReducer
        ? state.offer.issueOfferReducer.columns
        : null
      : null,
    columnsError: state.offer
      ? state.offer.issueOfferReducer
        ? state.offer.issueOfferReducer.columnsError
        : null
      : null
  };
}

const mapDispatchToProps = {
  submitIssueOffer,
  updateIssueOffer,
  loadColumns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

function CInput(props) {
  return <input {...props} />;
}
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

// const props.columns = [
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
//   v = initValidations(props.columns);
// }, []);
