import axios from "axios";
import { BASEURL } from "../constants/ui";

const axiosClient = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log(response);
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { config, status, data } = error.response;
    const URLS = ["/auth/local/register", "/auth/local"];
    if (URLS.includes(config.url) && status === 400) {
      const errorList = data.data || [];
      const firstError = errorList.length > 0 ? errorList[0] : {};
      const messagesList = firstError.messages || [];
      const firstMessage = messagesList.length > 0 ? messagesList[0] : {};
      throw new Error("axiosCilents", firstMessage.messages);
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
