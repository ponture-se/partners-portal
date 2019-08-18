import React from "react";
import { Field } from "formik";
import { currentLangName } from "services/languageManager";
export default function Boolean(props) {
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
          <div className="custom_checkbox">
            <div className="left">
              <label className="checkBox">
                <input
                  type="checkbox"
                  id={"chk" + field.name}
                  name={field.nam}
                  onChange={handleChange}
                  checked={values[field.name]}
                />
                <span className="checkmark" />
              </label>
            </div>
            <div className="right">
              <label htmlFor={"chk" + field.name}>
                {field.title && field.title[currentLangName]
                  ? field.title[currentLangName]
                  : field.title}
              </label>
              <label>{/* {t("FIELD_INVISIBLE_INFO")} */}</label>
            </div>
          </div>
        );
      }}
    />
  );
}
