import { toast } from "react-toastify";
import { getToken } from "../../../api/account-api";
import Storage from "../../storageManager";
import setAuthorizationToken from "../../../utils/setAuthorizationToken";
import { currentLangName, t } from "../../languageManager";

export const LOADING = "auth/LOADING";
export const SUCCESS_TOKEN = "auth/SUCCESS_TOKEN";
export const FAILED_TOKEN = "auth/FAILED_TOKEN";
export const SET_AUTHORIZATION = "auth/SET_AUTHORIZATION";

export const SET_USER = "auth/SET_USER";
export const LOGOUT = "auth/LOGOUT";
//
export const SET_DATA = "main/SET_DATA";
export const TOGGLE_LOADING = "main/TOGGLE_LOADING";
//
export function setAuthorization(value) {
  return {
    type: SET_AUTHORIZATION,
    value
  };
}
export function setUser(user) {
  Storage.set("@ponture-partners/userInfo", user);
  return {
    type: SET_USER,
    user
  };
}
export function logout() {
  return {
    type: LOGOUT
  };
}

export const loginUser = token => dispatch => {
  Storage.set("p_token", token);
  setAuthorizationToken(token); // set axios token
  dispatch(setAuthorization(true));
};
export const navigateHome = router => {
  router.history.push(
    !router.location.state
      ? "/" + currentLangName + "/newApplications"
      : router.location.state.from.pathname
  );
};

export const logoutUser = () => dispatch => {
  Storage.remove("p_token");
  setAuthorizationToken(false); // remove axios token
  dispatch(logout());
};

export const login = (userName, password, router) => dispatch => {
  dispatch({ type: LOADING });
  getToken()
    .onOk(result => {
      dispatch({ type: SUCCESS_TOKEN });
      dispatch(setUser({ customerId: userName }));
      if (result) {
        dispatch(loginUser(result.access_token));
        navigateHome(router);
      }
    })
    .onServerError(result => {
      dispatch({ type: FAILED_TOKEN });
      toast.error(t("INTERNAL_SERVER_ERROR"));
    })
    .onBadRequest(result => {
      dispatch({ type: FAILED_TOKEN });
      toast.error(t("BAD_REQUEST"));
    })
    .notFound(result => {
      dispatch({ type: FAILED_TOKEN });
      toast.error(t("NOT_FOUND"));
    })
    .unKnownError(result => {
      dispatch({ type: FAILED_TOKEN });
      toast.error(t("UNKNOWN_ERROR"));
    })
    .onRequestError(result => {
      dispatch({ type: FAILED_TOKEN });
      toast.error(t("ON_REQUEST_ERROR"));
    })
    .call(userName, password);
};
