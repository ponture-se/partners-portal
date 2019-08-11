import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import application from "./application";
import offer from "./offer";

export default combineReducers({
  authReducer,
  application,
  offer
});
