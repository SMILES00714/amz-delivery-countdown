/** Types */
import type { IBasicRecord } from "./common";

export interface IHub extends IBasicRecord {
  identifier: string;
}

export interface IHubPayload {
  hub: IHub;
}

export interface IHubResponse {
  hub: IHub;
}

export interface ISearchHubs {
  identifier?: string;
  hubs?: IHub[];
}

export interface ISearchHubsPayload {
  search: ISearchHubs;
}

export interface ISearchHubsResponse {
  lastEvaluatedKey?: number;
  results: IHub[];
}
