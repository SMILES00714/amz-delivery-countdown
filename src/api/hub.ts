/** Vendors */
import axios from "axios";

/** Types */
import type {
  IHub,
  IHubPayload,
  IHubResponse,
  ISearchHubsPayload,
  ISearchHubsResponse,
} from "../types";

/* Hub API Endpoints */
export async function createHubApi(
  props: Partial<IHub>
): Promise<IHubResponse> {
  return await axios.put<IHubPayload, IHubResponse>("/hub", props);
}

export async function deleteHubApi(props: IHubPayload): Promise<IHubResponse> {
  return await axios.delete<IHubPayload, IHubResponse>("/hub", {
    data: props,
  });
}

export async function getHubApi(params: Partial<IHub>): Promise<IHubResponse> {
  return await axios.get<IHubPayload, IHubResponse>("/hub", {
    params,
  });
}

export async function searchHubsApi(
  params: ISearchHubsPayload
): Promise<ISearchHubsResponse> {
  return await axios.get<ISearchHubsPayload, ISearchHubsResponse>(
    "/hub/search",
    {
      params,
    }
  );
}

export async function updateHubApi(props: IHubPayload): Promise<IHubResponse> {
  return await axios.post<IHubPayload, IHubResponse>("/hub", {
    data: props,
  });
}

const hub = {
  create: {
    hub: createHubApi,
  },
  delete: {
    hub: deleteHubApi,
  },
  get: {
    hub: getHubApi,
  },
  search: {
    hubs: searchHubsApi,
  },
  update: {
    hub: updateHubApi,
  },
};

export default hub;
