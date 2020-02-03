import React, { useState, useEffect } from "react";
import { Field } from "formik";
import { t, currentLangName } from "services/languageManager";
export default function Number(props) {
  const { field, viewMode, index } = props;
  const [defaultValue, setDefaultValue] = useState(props.defaultValue);
  return (
    <Field
      name={field.apiName}
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
              (errors[field.apiName] &&
              touched[field.apiName] &&
              errors[field.apiName]
                ? "--invalid"
                : "")
            }
          >
            <div className="formInput__header">
              <div className="formInput__header__left">
                <span className="elementTitle">
                  {field.label +
                    (field.partnerUnit ? " (" + field.partnerUnit + ")" : "")}
                </span>
              </div>
            </div>
            <div className="formInput__body">
              <input
                type="number"
                min="0"
                step="0.1"
                name={field.apiName}
                className="element"
                placeholder={field.label}
                onChange={value => {
                  if (defaultValue) {
                    setDefaultValue(null);
                  }
                  handleChange(value);
                }}
                onBlur={handleBlur}
                value={defaultValue ? defaultValue : values[field.apiName]}
                autoFocus={index === 0 ? true : false}
                readOnly={viewMode}
                // defaultValue={defaultValue}
              />
            </div>
            <div className="formInput__footer">
              <div className="formInput__footer__left">
                <span className="elementInfo">
                  {errors[field.apiName] &&
                    touched[field.apiName] &&
                    errors[field.apiName]}
                </span>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
