/** Vendors */
import axios from "axios";

/** Types */
import type {
  ISchedule,
  IScheduleEvent,
  ISchedulePayload,
  IScheduleResponse,
  IScheduleEventPayload,
  IScheduleEventResponse,
  ISearchSchedulesPayload,
  ISearchSchedulesResponse,
  ISearchScheduleEventsPayload,
  ISearchScheduleEventsResponse,
} from "../types";

/* Schedule API Endpoints */
export async function createScheduleApi(
  props: Partial<ISchedule>
): Promise<IScheduleResponse> {
  return await axios.put<ISchedulePayload, IScheduleResponse>(
    "/schedule",
    props
  );
}

export async function deleteScheduleApi(
  props: ISchedulePayload
): Promise<IScheduleResponse> {
  return await axios.delete<ISchedulePayload, IScheduleResponse>("/schedule", {
    data: props,
  });
}

export async function getScheduleApi(
  params: Partial<ISchedule>
): Promise<IScheduleResponse> {
  return await axios.get<ISchedulePayload, IScheduleResponse>("/schedule", {
    params,
  });
}

export async function searchSchedulesApi(
  params: ISearchSchedulesPayload
): Promise<ISearchSchedulesResponse> {
  return await axios.get<ISearchSchedulesPayload, ISearchSchedulesResponse>(
    "/schedule/search",
    {
      params,
    }
  );
}

export async function updateScheduleApi(
  props: ISchedulePayload
): Promise<IScheduleResponse> {
  return await axios.post<ISchedulePayload, IScheduleResponse>("/schedule", {
    data: props,
  });
}

/** Schedule Events API */
export async function createScheduleEventApi(
  props: Partial<IScheduleEvent>
): Promise<IScheduleEventResponse> {
  return await axios.put<IScheduleEventPayload, IScheduleEventResponse>(
    "/schedule/event",
    { data: props }
  );
}

export async function deleteScheduleEventApi(
  props: IScheduleEventPayload
): Promise<IScheduleEventResponse> {
  return await axios.delete<IScheduleEventPayload, IScheduleEventResponse>(
    "/schedule/event",
    { data: props }
  );
}

export async function getScheduleEventApi(
  params: Partial<IScheduleEvent>
): Promise<IScheduleEventResponse> {
  return await axios.get<IScheduleEventPayload, IScheduleEventResponse>(
    "/schedule/event",
    {
      params,
    }
  );
}

export async function searchScheduleEventsApi(
  params: ISearchScheduleEventsPayload
): Promise<ISearchScheduleEventsResponse> {
  return await axios.get<
    ISearchScheduleEventsPayload,
    ISearchScheduleEventsResponse
  >("/schedule/event/search", {
    params,
  });
}

export async function updateScheduleEventApi(
  props: IScheduleEventPayload
): Promise<IScheduleEventResponse> {
  return await axios.post<IScheduleEventPayload, IScheduleEventResponse>(
    "/schedule/event",
    { data: props }
  );
}

const schedule = {
  create: {
    event: createScheduleEventApi,
    schedule: createScheduleApi,
  },
  delete: {
    event: deleteScheduleEventApi,
    schedule: deleteScheduleApi,
  },
  get: {
    event: getScheduleEventApi,
    schedule: getScheduleApi,
  },
  search: {
    events: searchScheduleEventsApi,
    schedules: searchSchedulesApi,
  },
  update: {
    event: updateScheduleEventApi,
    schedule: updateScheduleApi,
  },
};

export default schedule;
