import { t } from "services/languageManager";
import { creditReport } from "api/main-api";

export const LOADING = "main/app/LOADING";
export const SUCCESS = "main/app/SUCCESS";
export const ERROR = "main/app/ERROR";

//
export function toggleLoading(value) {
  return {
    type: LOADING,
    payload: value
  };
}
// ROP_PUBLIC_CLAIMS(1-20)
// HISTORICAL_DEBT_DETAILS(1-9)
// MAILING_ADDRESSES
// VISITING_ADDRESSES
// INACTIVE_DIRECTORS
// SECONDARY_INDUSTRIES
// PAYROLL_DATA
// ROP_PRIVATE_CLAIMS_APP
// ACCOUNT_NOTES
// ACCOUNT_KEY_VALUES
// ACCOUNT_BALANCE_SHEET
// ACCOUNT_PROFITLOSS_SHEET
// DIRECTORS
// GETDATA_RESPONSE
const keys = [
  "ROP_PUBLIC_CLAIMS",
  "HISTORICAL_DEBT_DETAILS",
  "MAILING_ADDRESSES",
  "VISITING_ADDRESSES",
  "INACTIVE_DIRECTORS",
  "SECONDARY_INDUSTRIES",
  "PAYROLL_DATA",
  "ROP_PRIVATE_CLAIMS_APP",
  "ACCOUNT_NOTES",
  "ACCOUNT_KEY_VALUES",
  "ACCOUNT_BALANCE_SHEET",
  "ACCOUNT_PROFITLOSS_SHEET",
  "DIRECTORS",
  "GETDATA_RESPONSE"
];
export const loaded = data => {
  const keysResult = {
    ROP_PUBLIC_CLAIMS: [],
    HISTORICAL_DEBT_DETAILS: [],
    MAILING_ADDRESSES: [],
    VISITING_ADDRESSES: [],
    INACTIVE_DIRECTORS: [],
    SECONDARY_INDUSTRIES: [],
    PAYROLL_DATA: [],
    ROP_PRIVATE_CLAIMS_APP: [],
    ACCOUNT_NOTES: [],
    ACCOUNT_KEY_VALUES: [],
    ACCOUNT_BALANCE_SHEET: [],
    ACCOUNT_PROFITLOSS_SHEET: [],
    DIRECTORS: [],
    GETDATA_RESPONSE: []
  };
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    for (const key in data) {
      if (typeof data[key] === "string") {
        keysResult[key] = data[key];
      } else {
        if (key.startsWith(k)) {
          const obj = { ...data[key] };
          if (keysResult[k]) keysResult[k].push(obj);
        }
      }
    }
  }

  return {
    type: SUCCESS,
    payload: keysResult
  };
};

export function setError(error) {
  return {
    type: ERROR,
    payload: error
  };
}

export function viewCreditReport(customerId) {
  return function(dispatch, getState) {
    dispatch(toggleLoading(true));
    //const { authReducer: auth } = getState();
    // const customerId = auth
    //   ? auth.userInfo
    //     ? auth.userInfo.customerId
    //       ? auth.userInfo.customerId
    //       : null
    //     : null
    //   : null;
    creditReport()
      .onOk(result => {
        dispatch(loaded(result));
      })
      .onServerError(result => {
        dispatch(
          setError({
            title: t("INTERNAL_SERVER_ERROR"),
            message: t("INTERNAL_SERVER_ERROR_MSG")
          })
        );
      })
      .onBadRequest(result => {
        dispatch(
          setError({
            title: t("BAD_REQUEST"),
            message: t("BAD_REQUEST")
          })
        );
      })
      .notFound(result => {
        dispatch(
          setError({
            title: t("NOT_FOUND"),
            message: t("NOT_FOUND")
          })
        );
      })
      .unKnownError(result => {
        dispatch(
          setError({
            title: t("UNKNOWN_ERROR"),
            message: t("UNKNOWN_ERROR")
          })
        );
      })
      .call(customerId);
  };
}
