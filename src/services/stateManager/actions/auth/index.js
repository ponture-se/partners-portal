import Cookies from "./../../../storageManager";
import setAuthorizationToken from "./../../../../utils/setAuthorizationToken";

export const SET_USER = "SET_USER";
export const SET_AUTHORIZATION = "SET_AUTHORIZATION";
export const LOGOUT = "LOGOUT";

export function setAuthorization(value) {
  return {
    type: SET_AUTHORIZATION,
    value
  };
}
export function setUser(user) {
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
  Cookies.set("p_token", token);
  setAuthorizationToken(token); // set axios token
  dispatch(setAuthorization(true));
};

export const logoutUser = () => dispatch => {
  Cookies.remove("p_token");
  setAuthorizationToken(false); // remove axios token
  dispatch(logout());
};
export const setUserInfo = user => dispatch => {
  dispatch(setUser(user));
};

export const loadUsers = () => dispatch => {
  // dispatch({ type: LOAD_USERS_LOADING });
  //   Api.getUsers()
  //     .then(response => response.json())
  //     .then(
  //       data => dispatch({ type: LOAD_USERS_SUCCESS, data }),
  //       error =>
  //         dispatch({
  //           type: LOAD_USERS_ERROR,
  //           error: error.message || "Unexpected Error!!!"
  //         })
  //     );
};

//================= loading and items are a case in reducer
export function loadingAction(bool) {
  return {
    type: "LOADING",
    loading: bool
  };
}

export function itemsAction(items) {
  return {
    type: "ITEMS",
    data: items
  };
}

export function fetchDataAction(url) {
  return dispatch => {
    dispatch(loadingAction(true));
    fetch(url)
      .then(response => response.json())
      .then(response => {
        dispatch(loadingAction(false));
        dispatch(itemsAction(response.results));
      });
  };
}
