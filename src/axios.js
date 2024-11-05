import axios from "axios";
import { getToken } from "./utils/utils";

const http = axios.create({
  baseURL: "https://api.spotify.com/v1/browse/",
});

http.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("token");
    if (!token) token = await getToken();

    if (token) config.headers.Authorization = token;
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : null;
    if (status == 401) {
      localStorage.removeItem("token");
      getToken();
    }
    return Promise.reject(error);
  }
);

export default http;
