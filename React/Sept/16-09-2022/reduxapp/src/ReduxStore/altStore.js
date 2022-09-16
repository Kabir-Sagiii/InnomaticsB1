import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import secondReducer from "../Reducers/secondReducer";

//combine all reducers with combineReducers() Method
const combinedAllReducers = combineReducers({ secondReducer });

//create the redux store
const mySecondStore = createStore(combinedAllReducers, applyMiddleware(logger));

export default mySecondStore;
