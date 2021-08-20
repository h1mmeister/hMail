import { combineReducers } from "redux";
import authReducer from "./authReducer";

// combining all the reducers using combineReducers
export default combineReducers({
  auth: authReducer,
});
