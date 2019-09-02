import * as Yup from "yup";
import { t } from "services/languageManager";

//
export default Yup.object().shape({
  partnerDetails: Yup.object().shape({
    Monthly_fee: Yup.number()
      .typeError(t("REQUIRED"))
      .min(0, t("INPUT_NEGATIVE_VALUE"))
      .required(t("REQUIRED")),
    Total_monthly_payment: Yup.number()
      .typeError(t("REQUIRED"))
      .min(0, t("INPUT_NEGATIVE_VALUE"))
      .required(t("REQUIRED"))
  }),
  amount: Yup.number()
    .min(0, t("INPUT_NEGATIVE_VALUE"))
    .required(t("REQUIRED")),
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

// function getCondition(prop) {
//   let y = Yup;
//   if (prop === "amount") {
//     y = y.number().required(t("REQUIRED"));
//     if (minimum_loan_amount) {
//       y = y.min(
//         minimum_loan_amount,
//         t(`Value can not be less than ${minimum_loan_amount}`)
//       );
//     }
//     if (maximum_loan_amount) {
//       y = y.max(
//         maximum_loan_amount,
//         t(`Value can not be more than ${maximum_loan_amount}`)
//       );
//     }
//   }
//   if (prop === "repayment_period") {
//     y = y.number().required(t("REQUIRED"));
//     if (minimum_loan_period) {
//       y = y.min(
//         minimum_loan_period,
//         t(`Value can not be less than ${minimum_loan_period}`)
//       );
//     }
//     if (maximum_loan_period) {
//       y = y.max(
//         maximum_loan_period,
//         t(`Value can not be more than ${maximum_loan_period}`)
//       );
//     }
//   }
//   return y;
// }
//  const monthlyRepaymentAmountRef = useRef(null);
//  const totalRepaymentAmount = useRef(null);
//  const startFeeRef = useRef(null);
//  const costRef = useRef(null);
//  let v;
//  const maximum_loan_amount = props.userInfo
//    ? props.userInfo.rules
//      ? props.userInfo.rules.maximum_loan_amount
//      : undefined
//    : undefined;
//  const maximum_loan_period = props.userInfo
//    ? props.userInfo.rules
//      ? props.userInfo.rules.maximum_loan_period
//      : undefined
//    : undefined;
//  const minimum_loan_amount = props.userInfo
//    ? props.userInfo.rules
//      ? props.userInfo.rules.minimum_loan_amount
//      : 1
//    : 1;
//  const minimum_loan_period = props.userInfo
//    ? props.userInfo.rules
//      ? props.userInfo.rules.minimum_loan_period
//      : 1
//    : 1;
