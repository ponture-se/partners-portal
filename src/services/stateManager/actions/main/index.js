import { getNewApplications } from "./../../../../api/main-api";

export const SET_DATA = "main/SET_DATA";
export const TOGGLE_LOADING = "main/TOGGLE_LOADING";

// function fetchData() {
//   return (dispatch, getState) => {
//     dispatch({ type: TOGGLE_LOADING, value: true });
//     getNewApplications()
//       .onOk(result => {
//         dispatch({ type: TOGGLE_LOADING, value: true });
//         if (result) {
//           dispatch({ type: SET_DATA, value: result });
//         }
//       })
//       .onServerError(result => {
//         if (!didCancel) {
//           toggleSpinner(false);
//           setError({
//             title: t("INTERNAL_SERVER_ERROR"),
//             message: t("INTERNAL_SERVER_ERROR_MSG")
//           });
//         }
//       })
//       .onBadRequest(result => {
//         if (!didCancel) {
//           toggleSpinner(false);
//           setError({
//             title: t("BAD_REQUEST"),
//             message: t("BAD_REQUEST_MSG")
//           });
//         }
//       })
//       .unAuthorized(result => {
//         if (!didCancel) {
//           toggleSpinner(false);
//           setError({
//             title: t("UNKNOWN_ERROR"),
//             message: t("UNKNOWN_ERROR_MSG")
//           });
//         }
//       })
//       .notFound(result => {
//         if (!didCancel) {
//           toggleSpinner(false);
//           setError({
//             title: t("NOT_FOUND"),
//             message: t("NOT_FOUND_MSG")
//           });
//         }
//       })
//       .unKnownError(result => {
//         if (!didCancel) {
//           toggleSpinner(false);
//           setError({
//             title: t("UNKNOWN_ERROR"),
//             message: t("UNKNOWN_ERROR_MSG")
//           });
//         }
//       })
//       .onRequestError(result => {
//         if (!didCancel) {
//           toggleSpinner(false);
//           setError({
//             title: t("ON_REQUEST_ERROR"),
//             message: t("ON_REQUEST_ERROR_MSG")
//           });
//         }
//       })
//       .call();
//   };
// }
// function allNewApps() {}
