// import axios from "axios";
// import { getToken } from "./utils/utils";
// const http = axios.create({
//   baseURL: "https://api.spotify.com/v1/browse/",
// });
// http.interceptors.request.use((config) => {
//   const authToken = localStorage.getItem("token");
//   if (authToken) {
//     config.headers.Authorization = `Bearer ${authToken}`;
//   } else {
//     getToken();
//     const authToken = localStorage.getItem("token");
//     config.headers.Authorization = `Bearer ${authToken}`;
//   }
//   return config;
// });
// export default http;
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
