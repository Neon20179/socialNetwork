import { SignInData, SignUpData } from "@/typing/entities";
import {
  axiosAPI,
  getRefreshToken,
  removeHeaders,
  setNewHeaders,
} from "@/utils";
import { HOST } from "@/env";

export const signInApi = (payload: SignInData) =>
  axiosAPI
    .post(`${HOST}/api/auth/token/obtain/`, payload)
    .then((response) => setNewHeaders(response));

export const signUpApi = (payload: SignUpData) =>
  axiosAPI.post(`${HOST}/api/auth/sign_up/`, payload);

export const signOutApi = () =>
  axiosAPI
    .post(`${HOST}/api/auth/token/blacklist/`, {
      refresh_token: getRefreshToken(),
    })
    .then(() => removeHeaders());
