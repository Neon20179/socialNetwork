import axios, { AxiosResponse, AxiosError } from "axios";

export const axiosAPI = axios.create({
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
    "Content-Type": "application/json",
    accept: "application/json"
  }
});

axiosAPI.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const originalRequest = error.config;

    // Prevent infinite loops early
    if (error.response.status === 401 && originalRequest.url === "/api/auth/token/refresh/") {
      window.location.href = "/login/";
      return Promise.reject(error);
    }

    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken: string = localStorage.getItem("refresh_token");

      if (refreshToken) {
        const tokenParts: { exp: number } = JSON.parse(atob(refreshToken.split(".")[1]));

        const now: number = Math.ceil(Date.now() / 1000);
        console.log(tokenParts.exp);

        if (tokenParts.exp > now) {
          return axiosAPI
            .post("/api/auth/token/refresh/", { refresh: refreshToken })
            .then((response: AxiosResponse) => {
              setNewHeaders(response);
              originalRequest.headers["Authorization"] = "Bearer " + response.data.access;

              return axiosAPI(originalRequest);
            })
            .catch((error: AxiosError) => {
              console.log(error);
            });
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = "/login/";
        }
      } else {
        console.log("Refresh token not available.");
        window.location.href = "/login/";
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export function setNewHeaders(response: AxiosResponse) {
  axiosAPI.defaults.headers["Authorization"] = "Bearer " + response.data.access;
  localStorage.setItem("access_token", response.data.access);
  localStorage.setItem("refresh_token", response.data.refresh);
}
