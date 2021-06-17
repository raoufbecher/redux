import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import { reducer } from "./reducers";

export default combineReducers({
  tasks: reducer,
  filtre: filterReducer
});