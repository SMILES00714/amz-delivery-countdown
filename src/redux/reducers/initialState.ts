/** Types */
import type {
  IHub,
  ISchedule,
  IScheduleEvent,
  IStandardList,
} from "../../types";

export interface IInitialState {
  hub: IStandardList<IHub>;
  schedule: IStandardList<ISchedule> & { event: IStandardList<IScheduleEvent> };
  socket: { status: "connected" | "disconnected" | string };
}

const initialState: IInitialState = {
  hub: {
    details: {} as IHub,
    list: [],
  },
  schedule: {
    details: {} as ISchedule,
    event: { details: {} as IScheduleEvent, list: [] },
    list: [],
  },
  socket: { status: "disconnected" },
};

export default initialState;
