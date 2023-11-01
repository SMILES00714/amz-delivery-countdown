/** Vendors */
import axios from "axios";

const env = import.meta.env.NODE_ENV === "development" ? "dev" : "prod";
axios.defaults.baseURL = `${import.meta.env.VITE_REACT_APP_API_ENDPOINT
  }/${env}`;
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(
  function (response) {
    if (!Object.prototype.hasOwnProperty.call(response, "data")) {
      return response;
    }
    return response.data;
  },
  function (error) {
    console.log("Error Status Code: ", error?.response?.status, error?.message);
    return Promise.reject({ error: error.message });
  }
);
