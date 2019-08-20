import { batch } from "react-redux";
import { toast } from "react-toastify";
import { getToken } from "api/account-api";
import Storage from "../../storageManager";
import setAuthorizationToken from "utils/setAuthorizationToken";
import { currentLangName, t } from "../../languageManager";

export const types = {
  LOADING: "auth/LOADING",
  SUCCESS_TOKEN: "auth/SUCCESS_TOKEN",
  FAILED_TOKEN: "auth/FAILED_TOKEN",
  SET_AUTHORIZATION: "auth/SET_AUTHORIZATION",
  SET_USER: "auth/SET_USER",
  UN_AUTHORIZED: "auth/UN_AUTHORIZED",
  LOGOUT: "auth/LOGOUT",
  SET_DATA: "main/SET_DATA",
  TOGGLE_LOADING: "main/TOGGLE_LOADING"
};

//
export function setAuthorization(value) {
  return {
    type: types.SET_AUTHORIZATION,
    payload: value
  };
}
export function setUser(user) {
  Storage.set("@ponture-partners/userInfo", user);
  return {
    type: types.SET_USER,
    payload: user
  };
}
export function logout() {
  return {
    type: types.LOGOUT
  };
}

export const loginUser = token => dispatch => {
  Storage.set("@ponture-partners/token", token);
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
  Storage.remove("@ponture-partners/token");
  setAuthorizationToken(false); // remove axios token
  dispatch(logout());
};

export const login = (userName, password, router) => dispatch => {
  dispatch({ type: types.LOADING });
  getToken()
    .onOk(result => {
      const { userInfo } = result;
      dispatch({ type: types.SUCCESS_TOKEN });
      dispatch(setUser(userInfo));
      if (result) {
        dispatch(loginUser(result.access_token));
        navigateHome(router);
      }
    })
    .onServerError(result => {
      dispatch({ type: types.FAILED_TOKEN });
      toast.error(t("INTERNAL_SERVER_ERROR"));
    })
    .onBadRequest(result => {
      dispatch({ type: types.FAILED_TOKEN });
      toast.error(t("BAD_REQUEST"));
    })
    .notFound(result => {
      dispatch({ type: types.FAILED_TOKEN });
      toast.error(t("NOT_FOUND"));
    })
    .unKnownError(result => {
      dispatch({ type: types.FAILED_TOKEN });
      toast.error(t("UNKNOWN_ERROR"));
    })
    .onRequestError(result => {
      dispatch({ type: types.FAILED_TOKEN });
      toast.error(t("ON_REQUEST_ERROR"));
    })
    .call(userName, password);
};
