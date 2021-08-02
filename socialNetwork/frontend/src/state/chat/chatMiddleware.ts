import { getAccessToken } from "@/utils";
import { Middleware } from "redux";
import {
  addMessageToChat,
  getPrivateChatSuccess,
  getGroupChatSuccess,
  sendMessage,
  createGroupChatSuccess,
  getChats
} from "./chatSlice";

let socket: WebSocket = null;
let accessToken = getAccessToken();

const chatMiddleware: Middleware = (store) => (next) => (action) => {
  if (socket !== null) {
    socket.onmessage = (e) => {
      const newMessage = JSON.parse(e.data);
      store.dispatch(addMessageToChat(newMessage));
    };
  }

  switch (action.type) {
    case getPrivateChatSuccess.type:
      if (socket !== null) socket.close();
      let privateChatId = action.payload.id;

      socket = new WebSocket(
        `ws://127.0.0.1:8000/ws/private_chat/${privateChatId}/?token=${accessToken}`
      );
      break;

    case getGroupChatSuccess.type:
      if (socket !== null) socket.close();
      let groupChatId = action.payload.id;
      socket = new WebSocket(
        `ws://127.0.0.1:8000/ws/group_chat/${groupChatId}/?token=${accessToken}`
      );
      break;

    case createGroupChatSuccess.type:
      store.dispatch(getChats());
      break;

    case sendMessage.type:
      socket.send(JSON.stringify({ message: action.payload }));
      break;
  }

  return next(action);
};

export default chatMiddleware;
