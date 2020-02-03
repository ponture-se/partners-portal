import React, { useState, useEffect } from "react";
import { Field } from "formik";
import { currentLangName } from "services/languageManager";
export default function Boolean(props) {
  const { field, viewMode } = props;
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
          <div className="custom_checkbox">
            <div className="left">
              <label className="checkBox">
                <input
                  type="checkbox"
                  id={"chk" + field.apiName}
                  name={field.apiName}
                  onChange={value => {
                    if (defaultValue) {
                      setDefaultValue(null);
                    }
                    handleChange(value);
                  }}
                  checked={
                    defaultValue !== null ? defaultValue : values[field.apiName]
                  }
                  disabled={viewMode}
                  // defaultValue={defaultValue}
                />
                <span className="checkmark" />
              </label>
            </div>
            <div className="right">
              <label htmlFor={"chk" + field.apiName}>
                {field.title && field.title[currentLangName]
                  ? field.title[currentLangName]
                  : field.label}
              </label>
              <label>{/* {t("FIELD_INVISIBLE_INFO")} */}</label>
            </div>
          </div>
        );
      }}
    />
  );
}
