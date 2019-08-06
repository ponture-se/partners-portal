import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import newAppsReducer from "./newApps/reducer";

export default combineReducers({
  authReducer,
  newAppsReducer
});
