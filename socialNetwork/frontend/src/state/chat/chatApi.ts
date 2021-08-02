import { axiosAPI } from "@/utils";

const rootUrl = "/api/chat";

export const getChatsApi = () =>
  axiosAPI.get(`${rootUrl}/chats/`).then((response) => response.data);

export const getPrivateChatApi = (chatId: number | string) =>
  axiosAPI
    .get(`${rootUrl}/private_chat/${chatId}/`)
    .then((response) => response.data);

export const getGroupChatApi = (chatId: number | string) =>
  axiosAPI
    .get(`${rootUrl}/group_chat/${chatId}/`)
    .then((response) => response.data);

export const createGroupChatApi = (data: FormData) =>
  axiosAPI
    .post(`${rootUrl}/group_chat/`, data)
    .then((response) => response.data);

export const createPrivateChatApi = (data: number) =>
  axiosAPI
    .post(`${rootUrl}/private_chat/`, { companion: data })
    .then((response) => response.data);
