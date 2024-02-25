/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000",
});

let isRefreshing = false;
let failedRequestQueue: any = [];

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (error.response.data === "token is expired\n") {
        const refresh_token = localStorage.getItem("@Hakuna:refresh_token");
        const originalConfig = error.config as any;

        if (!isRefreshing) {
          isRefreshing = true;

          api
            .post("auth/refresh_token", {
              refresh_token,
            })
            .then((response) => {
              const { token, refresh_token } = response.data;
              localStorage.setItem("@Hakuna:token", token);
              localStorage.setItem("@Hakuna:refresh_token", refresh_token);
              api.defaults.headers.authorization = `Bearer ${token}`;

              failedRequestQueue.forEach((request: any) =>
                request.onSuccess(token)
              );
              failedRequestQueue = [];
            })
            .catch((err) => {
              failedRequestQueue.forEach((request: any) =>
                request.onFailure(err)
              );
              failedRequestQueue = [];
              localStorage.removeItem("@Hakuna:token");
              localStorage.removeItem("@Hakuna:refresh_token");
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers["Authorization"] = `Bearer ${token}`;
              resolve(api(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      } else {
        localStorage.removeItem("@Hakuna:token");
        localStorage.removeItem("@Hakuna:refresh_token");
      }

      return Promise.reject(error);
    }
  }
);

export { api };
