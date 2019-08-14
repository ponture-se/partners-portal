import { combineReducers } from "redux";
import issueOfferReducer from "./issueOffer/reducer";
import myOffersReducer from "./myOffers/reducer";

export default combineReducers({
  issueOfferReducer,
  myOffersReducer
});
