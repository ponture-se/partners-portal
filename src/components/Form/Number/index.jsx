import React from "react";
import { Field } from "formik";
import { t, currentLangName } from "services/languageManager";
export default function Number(props) {
  const { field } = props;
  return (
    <Field
      name={field.name}
      render={fieldProps => {
        // const { field } = fieldProps;
        const {
          errors,
          touched,
          handleChange,
          handleBlur,
          values
        } = fieldProps.form;
        return (
          <div
            className={
              "formInput " +
              (errors[field.name] && touched[field.name] && errors[field.name]
                ? "--invalid"
                : "")
            }
          >
            <div className="formInput__header">
              <div className="formInput__header__left">
                <span className="elementTitle">
                  {field.title && field.title[currentLangName]
                    ? field.title[currentLangName]
                    : field.title}
                </span>
              </div>
            </div>
            <div className="formInput__body">
              <input
                type="number"
                min="0"
                name={field.name}
                className="element"
                placeholder={t("ISSUE_OFFER_AMOUNT_PLACEHOLDER")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[field.name]}
                autoFocus={field.isFocus}
              />
            </div>
            <div className="formInput__footer">
              <div className="formInput__footer__left">
                <span className="elementInfo">
                  {errors[field.name] &&
                    touched[field.name] &&
                    errors[field.name]}
                </span>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
