/** Redux */
import { IAppDispatch, IGetState } from "../configureStore";
import * as types from "./types";

/** Types */
import type {
  ISchedule,
  IScheduleEvent,
  ISearchSchedules,
  ISearchScheduleEvents,
} from "../../types";

export function createScheduleAction(schedule: ISchedule) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.schedule.create.schedule({ schedule });
    dispatch({
      ...response,
      type: types.CREATE_SCHEDULE_SUCCESS,
    });
  };
}

export function deleteScheduleAction(schedule: ISchedule) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.schedule.delete.schedule({ schedule });
    dispatch({
      ...response,
      type: types.DELETE_SCHEDULE_SUCCESS,
    });
  };
}

export function getScheduleAction(schedule: ISchedule) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.schedule.get.schedule({ schedule });
    dispatch({
      ...response,
      type: types.GET_SCHEDULE_SUCCESS,
    });
  };
}

export function searchSchedulesAction(search: ISearchSchedules) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.schedule.search.schedules(search);
    dispatch({
      ...response,
      type: types.SEARCH_SCHEDULES_SUCCESS,
    });
  };
}

export function updateScheduleAction(schedule: ISchedule) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.schedule.update.schedule({ schedule });
    dispatch({
      ...response,
      type: types.UPDATE_SCHEDULE_SUCCESS,
    });
  };
}

/** Schedule Event(s) Actions */
export function createScheduleEventAction(event: IScheduleEvent) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.schedule.create.event({ event });
    dispatch({
      ...response,
      type: types.CREATE_SCHEDULE_EVENT_SUCCESS,
    });
  };
}

export function deleteScheduleEventAction(event: IScheduleEvent) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.schedule.delete.event({ event });
    dispatch({
      ...response,
      type: types.DELETE_SCHEDULE_EVENT_SUCCESS,
    });
  };
}

export function getScheduleEventAction(event: IScheduleEvent) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.schedule.get.event({ event });
    dispatch({
      ...response,
      type: types.GET_SCHEDULE_EVENT_SUCCESS,
    });
  };
}

export function searchScheduleEventsAction(search: ISearchScheduleEvents) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.schedule.search.events(search);
    dispatch({
      ...response,
      type: types.SEARCH_SCHEDULE_EVENTS_SUCCESS,
    });
  };
}

export function updateScheduleEventAction(event: IScheduleEvent) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.schedule.update.event({ event });
    dispatch({
      ...response,
      type: types.UPDATE_SCHEDULE_EVENT_SUCCESS,
    });
  };
}
