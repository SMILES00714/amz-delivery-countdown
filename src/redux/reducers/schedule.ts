/** Vendors */
import { createAction, createReducer } from "@reduxjs/toolkit";

/** Redux */
import * as types from "../actions/types";
import initialState from "./initialState";

/** Types */
import type { AnyAction, IRootState } from "../configureStore";

const schedule = createReducer(initialState.schedule, (builder) => {
  builder
    .addCase(
      createAction(types.CREATE_SCHEDULE_SUCCESS),
      (state: IRootState["schedule"], action: AnyAction) => ({
        ...state,
        details: action.schedule,
      })
    )
    .addCase(
      createAction(types.DELETE_SCHEDULE_SUCCESS),
      (state: IRootState["schedule"], action: AnyAction) => ({
        ...state,
        details: action.schedule,
      })
    )
    .addCase(
      createAction(types.GET_SCHEDULE_SUCCESS),
      (state: IRootState["schedule"], action: AnyAction) => ({
        ...state,
        details: action.schedule,
      })
    )
    .addCase(
      createAction(types.SEARCH_SCHEDULES_SUCCESS),
      (state: IRootState["schedule"], action: AnyAction) => ({
        ...state,
        list: action.results,
      })
    )
    .addCase(
      createAction(types.UPDATE_SCHEDULE_SUCCESS),
      (state: IRootState["schedule"], action: AnyAction) => ({
        ...state,
        details: action.schedule,
      })
    );

  builder
    .addCase(
      createAction(types.CREATE_SCHEDULE_EVENT_SUCCESS),
      (state: IRootState["schedule"], action: AnyAction) => ({
        ...state,
        event: { ...state.event, details: action.event },
      })
    )
    .addCase(
      createAction(types.DELETE_SCHEDULE_EVENT_SUCCESS),
      (state: IRootState["schedule"], action: AnyAction) => ({
        ...state,
        event: { ...state.event, details: action.event },
      })
    )
    .addCase(
      createAction(types.GET_SCHEDULE_EVENT_SUCCESS),
      (state: IRootState["schedule"], action: AnyAction) => ({
        ...state,
        event: { ...state.event, details: action.event },
      })
    )
    .addCase(
      createAction(types.SEARCH_SCHEDULE_EVENTS_SUCCESS),
      (state: IRootState["schedule"], action: AnyAction) => ({
        ...state,
        event: { ...state.event, list: action.results },
      })
    )
    .addCase(
      createAction(types.UPDATE_SCHEDULE_EVENT_SUCCESS),
      (state: IRootState["schedule"], action: AnyAction) => ({
        ...state,
        event: { ...state.event, details: action.event },
      })
    )
    .addDefaultCase((state) => state);
});

export default schedule;
