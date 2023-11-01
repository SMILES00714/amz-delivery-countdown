/** Redux */
import { IAppDispatch, IGetState } from "../configureStore";
import * as types from "./types";

/** Types */
import type { IHub, ISearchHubs } from "../../types";

export function createHubAction(hub: IHub) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.hub.create.hub({ hub });
    dispatch({
      ...response,
      type: types.CREATE_HUB_SUCCESS,
    });
  };
}

export function deleteHubAction(hub: IHub) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.hub.delete.hub({ hub });
    dispatch({
      ...response,
      type: types.DELETE_HUB_SUCCESS,
    });
  };
}

export function getHubAction(hub: IHub) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.hub.get.hub({ hub });
    dispatch({
      ...response,
      type: types.GET_HUB_SUCCESS,
    });
  };
}

export function searchHubsAction(search: ISearchHubs) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.hub.search.hubs(search);
    dispatch({
      ...response,
      type: types.SEARCH_HUBS_SUCCESS,
    });
  };
}

export function updateHubAction(hub: IHub) {
  return async function (
    dispatch: IAppDispatch,
    _getState: IGetState,
    api: any
  ) {
    const response = await api.hub.update.hub({ hub });
    dispatch({
      ...response,
      type: types.UPDATE_HUB_SUCCESS,
    });
  };
}
