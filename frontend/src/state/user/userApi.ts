import { axiosAPI } from "@/utils";
import { HOST } from "@/env";

const rootUrl = HOST + "/api/user/";

export const getUserDataApi = () =>
  axiosAPI.get(rootUrl).then((response) => response.data);

export const getOtherUserDataApi = (userId: number) =>
  axiosAPI.get(rootUrl + userId).then((response) => response.data);

export const findUserApi = (payload: string) =>
  axiosAPI
    .get(`${rootUrl}find_user/?search=${payload}`)
    .then((response) => response.data);
