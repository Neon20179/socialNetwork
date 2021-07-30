import { axiosAPI } from "@/utils";

const rootUrl = "/api/friends";

export const getFriendsApi = (user_id?: number) =>
  axiosAPI
    .get(`${rootUrl}/friends_list/` + (user_id ? `?user_id=${user_id}` : ""))
    .then((response) => response.data);

export const addFriendApi = (userId: number) =>
  axiosAPI
    .post(`${rootUrl}/add_friend/`, { to_user: userId })
    .then((response) => response.data);

export const removeFriendApi = (userId: number) =>
  axiosAPI
    .post(`${rootUrl}/remove_friend/`, { friend: userId })
    .then((response) => response.data);
