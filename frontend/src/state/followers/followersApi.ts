import { axiosAPI } from "@/utils";
import { HOST } from "@/env";

const rootUrl = HOST + "/api/followers";

export const getFollowers = () =>
  axiosAPI.get(`${rootUrl}/followers/`).then((response) => response.data);

export const getFollowing = () =>
  axiosAPI.get(`${rootUrl}/following/`).then((response) => response.data);

export const followApi = (userId: number) =>
  axiosAPI
    .post(`${rootUrl}/follow/`, { following: userId })
    .then((response) => response.data);

export const unfollowApi = (userId: number) =>
  axiosAPI
    .post(`${rootUrl}/unfollow/`, { following: userId })
    .then((response) => response.data);
