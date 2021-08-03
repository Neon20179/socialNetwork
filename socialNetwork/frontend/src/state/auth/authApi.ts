import { SignInData, SignUpData } from "@/typing/entities";
import {
  axiosAPI,
  getRefreshToken,
  removeHeaders,
  setNewHeaders
} from "@/utils";

export const signInApi = (payload: SignInData) =>
  axiosAPI
    .post("/api/auth/token/obtain/", payload)
    .then((response) => setNewHeaders(response));

export const signUpApi = (payload: SignUpData) =>
  axiosAPI.post("/api/auth/sign_up/", payload);

export const signOutApi = () =>
  axiosAPI
    .post("/api/auth/token/blacklist/", { refresh_token: getRefreshToken() })
    .then(() => removeHeaders());
