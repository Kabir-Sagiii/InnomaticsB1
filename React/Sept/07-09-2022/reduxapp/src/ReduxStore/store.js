import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import textReducer from "../Reducers/textReducer";
const combinedReducers = combineReducers({ textReducer });
const mystore = createStore(combinedReducers, applyMiddleware(logger));
export default mystore;
