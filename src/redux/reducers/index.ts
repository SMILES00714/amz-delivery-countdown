/** Vendors */
import { combineReducers } from "@reduxjs/toolkit";

/** Reducers */
import hub from "./hub"
import schedule from "./schedule";
import socket from "./socket";

const rootReducer = combineReducers({
  hub,
  schedule,
  socket
});

export default rootReducer;
