import { Middleware } from "redux";
import { getAccessToken } from "@/utils";
import { getFriendNotificationsSuccess } from "./friendsSlice";

const accessToken = getAccessToken();

const friendNotificationSocket = new WebSocket(
  `ws://127.0.0.1:8000/ws/friend_notifications/?token=${accessToken}`
);

export const friendNotificationMiddleware: Middleware =
  (store) => (next) => (action) => {
    friendNotificationSocket.onmessage = (e) => {
      const friendNotifications = JSON.parse(e.data);
      store.dispatch(getFriendNotificationsSuccess(friendNotifications));
    };

    return next(action);
  };
