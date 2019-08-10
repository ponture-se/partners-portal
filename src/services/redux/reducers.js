import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import application from "./application";

export default combineReducers({
  authReducer,
  application
});
