import { combineReducers } from "@reduxjs/toolkit";
import unitReducer from "./unitSlice";

const rootReducer = combineReducers({
  units: unitReducer,
});

export default rootReducer;
