/** Types */
import type { IBasicRecord } from "./common";

export interface ISchedule extends IBasicRecord {
  day: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export interface IScheduleEvent extends IBasicRecord {
  enabled: boolean;
  end: number;
  noise_intervals: Array<number>;
  schedule: string;
  start: number;
}

export interface eventType {
  event: IScheduleEvent;
  eventIndex: number;
  activeIndex: number;
  eventName: string;
  queue: string;
  inTime: string;
  outTime: string;
  lateTime: string;
}
export interface ISchedulePayload {
  schedule: ISchedule;
}

export interface IScheduleResponse {
  schedule: ISchedule;
}

export interface IScheduleEventPayload extends IBasicRecord {
  event: IScheduleEvent;
}

export interface IScheduleEventResponse {
  event: IScheduleEvent;
}

export interface ISearchSchedules {
  schedules: Array<string>;
}

export interface ISearchSchedulesPayload {
  search: ISearchSchedules;
}

export interface ISearchSchedulesResponse {
  lastEvaluatedKey?: number;
  results: ISchedule[];
}

export interface ISearchScheduleEvents {
  events: Array<IScheduleEvent>;
}

export interface ISearchScheduleEventsPayload {
  search: ISearchScheduleEvents;
}

export interface ISearchScheduleEventsResponse {
  lastEvaluatedKey?: number;
  results: IScheduleEvent[];
}
