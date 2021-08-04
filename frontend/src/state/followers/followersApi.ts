import { axiosAPI } from "@/utils";
import { HOST } from "@/env";

const rootUrl = HOST + "/api/followers";

export const followApi = (userId: number) =>
  axiosAPI
    .post(`${rootUrl}/follow/`, { following: userId })
    .then((response) => response.data);

export const unfollowApi = (userId: number) =>
  axiosAPI
    .post(`${rootUrl}/unfollow/`, { following: userId })
    .then((response) => response.data);
