import * as Yup from "yup";
import { t } from "services/languageManager";
function decimalFormat(ref, msg) {
  let value = this.resolve(Yup.ref(ref));
  if (value === 10) {
    return msg;
  }
  return "";
}

Yup.addMethod(Yup.number, "decimalFormat", decimalFormat);
export default Yup.object().shape({
  amount: Yup.number()
    .required(t("REQUIRED"))
    .min(0, t("INPUT_NEGATIVE_VALUE")),
  interest_rate: Yup.number()
    .required(t("REQUIRED"))
    .min(0, t("INPUT_NEGATIVE_VALUE")),
    // .decimalFormat("interest_rate", "2 decimal"),
  repayment_period: Yup.number()
    .required(t("REQUIRED"))
    .min(0, t("INPUT_NEGATIVE_VALUE")),
  monthly_repayment_amount: Yup.number()
    .required(t("REQUIRED"))
    .min(0, t("INPUT_NEGATIVE_VALUE")),
  total_repayment_amount: Yup.number()
    .required(t("REQUIRED"))
    .min(0, t("INPUT_NEGATIVE_VALUE")),
  start_fee: Yup.number().required(t("REQUIRED")),
  cost: Yup.number().required(t("REQUIRED")),
  personal_guarantee_needed: Yup.bool(),
  other_guarantees_needed: Yup.bool(),
  personal_guarantee_details: Yup.string(),
  number_of_personal_guarantees: Yup.number().min(0, t("INPUT_NEGATIVE_VALUE")),
  other_guarantees_details: Yup.string(),
  other_guarantees_type: Yup.string(),
  more_details: Yup.string(),
  offer_description: Yup.string(),
  extra_offer_description: Yup.string()
});
