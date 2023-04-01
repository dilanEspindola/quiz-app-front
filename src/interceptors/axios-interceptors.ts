import axios, { AxiosRequestConfig } from "axios";
import {
  errorHandleHttp,
  updateNotification,
  loadingNofication,
  errorNotifications,
  getCheckValidationCookie,
} from "@/helpers";

export const axiosConfig = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_URL,
  baseURL: "https://ce28-2800-484-6d7c-1d20-5df2-4903-b020-ada0.ngrok.io",
  withCredentials: true,
});

export const axiosInterceptors = () => {
  axiosConfig.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const errorMessage = errorHandleHttp(error);
      errorNotifications(errorMessage);

      return Promise.reject(error);
    }
  );
};
