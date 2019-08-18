import * as Yup from "yup";
import { t } from "services/languageManager";
import mapValues from "lodash/mapValues";

export default function initValidations(fields) {
    
  function getFieldByName(name) {
    return fields.find(f => f.name === name);
  }
  return Yup.lazy(obj =>
    Yup.object(
      mapValues(obj, (value, key) => {
        const f = getFieldByName(key);
        let y = Yup;
        if (f) {
          const type = f.type.toLowerCase();
          if (type === "number") y = y.number();
          if (type === "boolean") y = y.bool();
          if (type === "string") y = y.string();
          if (f.isRequired) y = y.required(t("REQUIRED"));
        }
        return y;
      })
    )
  );
}
// const validation = Yup.object().shape({
//   amount: Yup.number()
//     .required(t("REQUIRED"))
//     .min(0, t("INPUT_NEGATIVE_VALUE")),
//   interestRate: Yup.number()
//     .required(t("REQUIRED"))
//     .min(0, t("INPUT_NEGATIVE_VALUE")),
//   repaymentPeriod: Yup.number()
//     .required(t("REQUIRED"))
//     .min(0, t("INPUT_NEGATIVE_VALUE")),
//   monthlyRepaymentAmount: Yup.number()
//     .required(t("REQUIRED"))
//     .min(0, t("INPUT_NEGATIVE_VALUE")),
//   totalRepaymentAmount: Yup.number()
//     .required(t("REQUIRED"))
//     .min(0, t("INPUT_NEGATIVE_VALUE")),
//   personalGuaranteeNeeded: Yup.bool(),
//   otherGuaranteeNeeded: Yup.bool(),
//   startFee: Yup.number().required(t("REQUIRED")),
//   cost: Yup.number().required(t("REQUIRED")),
//   personalGuaranteeDetails: Yup.string(),
//   otherGuaranteeDetails: Yup.string(),
//   otherGuaranteesType: Yup.string(),
//   moreDetails: Yup.string(),
//   offerDescription: Yup.string(),
//   extraOfferDescription: Yup.string()
// });
// export  validation;
