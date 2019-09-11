import React from "react";
import { Formik } from "formik";
import { Number, String, Boolean } from "components/Form";
import { t } from "services/languageManager";

const DynamicForm = props => {
  function renderFields() {
    const { fields } = props;
    return (
      fields &&
      fields.map(f => {
        const type = f.type.toLowerCase();
        if (type === "string")
          return (
            <div className="formRow" key={f.name}>
              <String field={f} />
            </div>
          );
        if (type === "number")
          return (
            <div className="formRow" key={f.name}>
              <Number field={f} />
            </div>
          );
        if (type === "boolean")
          return (
            <div className="formRow" key={f.name}>
              <Boolean field={f} />
            </div>
          );
        return (
          <div className="formRow" key={f.name}>
            <String field={f} />
          </div>
        );
        return null;
      })
    );
  }
  function getInitialValues(renderFields) {
    const initialValues = {};
    renderFields.forEach(field => {
      if (!initialValues[field.name]) {
        initialValues[field.name] = field.defaultValue;
      }
    });
    //return initialValues object
    return initialValues;
  }
  const initialValues = getInitialValues(props.fields);
  function closeModal() {
    if (props.onCloseModal) {
      props.onCloseModal();
    }
  }
  return (
    <Formik
      onSubmit={values => {
        console.log(values);
      }}
      validationSchema={props.validation}
      initialValues={initialValues}
      render={form => {
        return (
          <div>
            <form onSubmit={form.handleSubmit}>
              <div className="issueOfferForm__content">{renderFields()}</div>
              <div className="issueOfferForm__actions">
                {!props.viewMode && (
                  <>
                    <button type="submit" className="btn --primary">
                      <CircleSpinner show={props.loading} />
                      {!props.loading && t("SUBMIT")}
                    </button>
                    <button className="btn --primary" onClick={closeModal}>
                      {t("CANCEL")}
                    </button>
                  </>
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
          </div>
        );
      }}
    />
  );
};
export default DynamicForm;

// renderTextArea(input) {
//     return (
//       <Fragment key={input.name}>
//         <label>{input.label}</label>
//         <div>
//           <Field
//             name={input.name}
//             render={props => {
//               const { field } = props;
//               const { errors, touched } = props.form;
//               const hasError =
//                 errors[input.name] && touched[input.name] ? "hasError" : "";
//               return (
//                 <div>
//                   <textarea {...field} id={hasError} />
//                 </div>
//               );
//             }}
//           />
//         </div>
//       </Fragment>
//     );
//   }

//   renderSelect(input) {
//     return (
//       <Fragment key={input.name}>
//         <label>{input.label}</label>
//         <div>
//           <Field
//             name={input.name}
//             render={props => {
//               const { field } = props;
//               const { errors, touched } = props.form;
//               const hasError =
//                 errors[input.name] && touched[input.name] ? "hasError" : "";
//               const defaultOption = (
//                 <option key="default" value="Please Select">
//                   Please Select
//                 </option>
//               );
//               const options = input.data.map(i => (
//                 <option key={i} value={i}>
//                   {" "}
//                   {i}{" "}
//                 </option>
//               ));
//               const selectOptions = [defaultOption, ...options];
//               return (
//                 <div className="dropdown">
//                   <select value={field.value} {...field} id={hasError}>
//                     {selectOptions}
//                   </select>
//                 </div>
//               );
//             }}
//           />
//         </div>
//       </Fragment>
//     );
//   }
