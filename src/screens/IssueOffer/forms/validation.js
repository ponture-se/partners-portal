import * as Yup from "yup";
import { t } from "services/languageManager";
import mapValues from "lodash/mapValues";

export default function initValidations(fields) {
  if (!fields) return;

  function getFieldByName(name) {
    return fields.find(f => f.apiName === name);
  }
  return Yup.lazy(obj =>
    Yup.object(
      mapValues(obj, (value, key) => {
        const f = getFieldByName(key);
        let y = Yup;
        if (f) {
          const type = f.type.toLowerCase();
          if (type === "currency") y = y.number();
          if (type === "number") y = y.number();
          if (type === "double") y = y.number();
          if (type === "boolean") y = y.bool();
          if (type === "string") y = y.string();
          if (type === "textarea") y = y.string();
          if (f.required) y = y.required(t("REQUIRED"));
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
