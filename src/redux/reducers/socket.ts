/** Vendors */
import { createAction, createReducer } from "@reduxjs/toolkit";

/** Redux */
import * as types from "../actions/types";
import initialState from "./initialState";

/** Types */
import type { IRootState } from "../configureStore";

const socketReducer = createReducer(initialState.socket, (builder) => {
  builder
    .addCase(
      createAction(types.SOCKET_CONNECTED),
      (state: IRootState["socket"]) => ({
        ...state,
        status: "connected",
      })
    )
    .addCase(
      createAction(types.SOCKET_DISCONNECTED),
      (state: IRootState["socket"]) => ({
        ...state,
        status: "disconnected",
      })
    )
    .addDefaultCase((state) => state);
});

export default socketReducer;
