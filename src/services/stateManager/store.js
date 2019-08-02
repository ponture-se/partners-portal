import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const customMiddleWare = store => next => action => {
  console.log("Middleware triggered:", action);
  next(action);
};

export function configureStore(initialState) {
  const middleware = [thunk, customMiddleWare];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  return store;
}
