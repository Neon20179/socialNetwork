import { axiosAPI } from "@/utils";
import { API_SERVER } from "@/env";

const rootUrl = API_SERVER + "/api/friends";

export const getFriendsApi = (user_id?: number) =>
  axiosAPI
    .get(`${rootUrl}/friends_list/` + (user_id ? `?user_id=${user_id}` : ""))
    .then((response) => response.data);

export const addFriendApi = (toUser: number) =>
  axiosAPI
    .post(`${rootUrl}/add_friend/`, { to_user: toUser })
    .then((response) => response.data);

export const removeFriendApi = (friend: number) =>
  axiosAPI
    .post(`${rootUrl}/remove_friend/`, { friend: friend })
    .then((response) => response.data);

export const getFriendRequestsApi = () =>
  axiosAPI.get(`${rootUrl}/friend_requests/`).then((response) => response.data);

export const acceptFriendRequestApi = (fromUser: number) =>
  axiosAPI
    .post(`${rootUrl}/accept_friend_request/`, { from_user: fromUser })
    .then((response) => response.data);

export const rejectFriendRequestApi = (fromUser: number) =>
  axiosAPI
    .post(`${rootUrl}/reject_friend_request/`, { from_user: fromUser })
    .then((response) => response.data);

export const cancelFriendRequestApi = (toUser: number) =>
  axiosAPI
    .post(`${rootUrl}/cancel_friend_request/`, { to_user: toUser })
    .then((response) => response.data);

export const getFriendNotificationsApi = () =>
  axiosAPI
    .get(`${rootUrl}/unseen_friend_request/`)
    .then((response) => response.data.friend_notifications);
