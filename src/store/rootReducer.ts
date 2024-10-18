import { combineReducers } from "@reduxjs/toolkit";
import unitReducer from "./unitSlice";
import resourceReducer from "./resourceSlice";

const rootReducer = combineReducers({
  units: unitReducer,
  resources: resourceReducer,
});

export default rootReducer;
