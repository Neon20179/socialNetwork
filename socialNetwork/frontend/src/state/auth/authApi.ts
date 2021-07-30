import { LoginData, SingUpData } from "@/typing/entities";
import {
  axiosAPI,
  getRefreshToken,
  removeHeaders,
  setNewHeaders
} from "@/utils";

export const loginApi = (payload: LoginData) =>
  axiosAPI
    .post("/api/auth/token/obtain/", payload)
    .then((response) => setNewHeaders(response));

export const signUpApi = (payload: SingUpData) =>
  axiosAPI.post("/api/auth/sign_up/", payload);

export const logoutApi = () =>
  axiosAPI
    .post("/api/auth/token/blacklist/", { refresh_token: getRefreshToken() })
    .then(() => removeHeaders());
