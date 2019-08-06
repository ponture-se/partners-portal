import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import newAppsReducer from "./newApps/reducer";
import openedAppsReducer from "./openedApps/reducer";

export default combineReducers({
  authReducer,
  newAppsReducer,
  openedAppsReducer
});
