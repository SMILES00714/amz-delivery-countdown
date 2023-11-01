/** Vendors */
import { createAction, createReducer } from "@reduxjs/toolkit";

/** Redux */
import * as types from "../actions/types";
import initialState from "./initialState";

/** Types */
import type { AnyAction, IRootState } from "../configureStore";

const hub = createReducer(initialState.hub, (builder) => {
  builder
    .addCase(
      createAction(types.CREATE_HUB_SUCCESS),
      (state: IRootState["hub"], action: AnyAction) => ({
        ...state,
        details: action.hub,
      })
    )
    .addCase(
      createAction(types.DELETE_HUB_SUCCESS),
      (state: IRootState["hub"], action: AnyAction) => ({
        ...state,
        details: action.hub,
      })
    )
    .addCase(
      createAction(types.GET_HUB_SUCCESS),
      (state: IRootState["hub"], action: AnyAction) => ({
        ...state,
        details: action.hub,
      })
    )
    .addCase(
      createAction(types.SEARCH_HUBS_SUCCESS),
      (state: IRootState["hub"], action: AnyAction) => ({
        ...state,
        list: action.results,
      })
    )
    .addCase(
      createAction(types.UPDATE_HUB_SUCCESS),
      (state: IRootState["hub"], action: AnyAction) => ({
        ...state,
        details: action.hub,
      })
    );
});

export default hub;
