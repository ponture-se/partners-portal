import { combineReducers } from "redux";
import newAppsReducer from "./newApps/reducer";
import openedAppsReducer from "./openedApps/reducer";
import rejectAppReducer from "./rejectApp/reducer";
import singleAppReducer from "./singleApp/reducer";

export default combineReducers({
  newAppsReducer,
  openedAppsReducer,
  rejectAppReducer,
  singleAppReducer
});
