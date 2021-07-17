import axios, { AxiosResponse, AxiosError } from "axios";

export const getAccessToken = () => localStorage.getItem("access_token");
export const getRefreshToken = () => localStorage.getItem("refresh_token");

export const axiosAPI = axios.create({
  headers: {
    Authorization: "Bearer " + getAccessToken(),
    "Content-Type": "application/json",
    accept: "application/json"
  }
});

axiosAPI.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === "/api/auth/token/refresh/"
    ) {
      window.location.href = "/login/";
      return Promise.reject(error);
    }

    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken: string = getRefreshToken();

      if (refreshToken) {
        const tokenParts: { exp: number } = JSON.parse(
          atob(refreshToken.split(".")[1])
        );

        const now: number = Math.ceil(Date.now() / 1000);

        if (tokenParts.exp > now) {
          return axiosAPI
            .post("/api/auth/token/refresh/", { refresh: refreshToken })
            .then((response: AxiosResponse) => {
              setNewHeaders(response);
              originalRequest.headers["Authorization"] =
                "Bearer " + response.data.access;

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

    return Promise.reject(error);
  }
);

export const setNewHeaders = (response: AxiosResponse) => {
  axiosAPI.defaults.headers["Authorization"] = "Bearer " + response.data.access;
  localStorage.setItem("access_token", response.data.access);
  localStorage.setItem("refresh_token", response.data.refresh);
};

export const removeHeaders = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  axiosAPI.defaults.headers["Authentication"] = null;
};

export const getUrlPk = (match: { url: string }) => {
  // .com/some_url/pk <-
  const urlArray: string[] = match.url.split("/").filter((el) => el != "");
  const pk: string = urlArray[urlArray.length - 1];
  return pk;
};
