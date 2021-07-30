import { axiosAPI } from "@/utils";

const rootUrl = "/api/followers";

export const followApi = (userId: number) =>
  axiosAPI
    .post(`${rootUrl}/follow/`, { following: userId })
    .then((response) => response.data);

export const unfollowApi = (userId: number) =>
  axiosAPI
    .post(`${rootUrl}/unfollow/`, { following: userId })
    .then((response) => response.data);
