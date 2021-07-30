import { axiosAPI } from "@/utils";

export const getUserDataApi = () =>
  axiosAPI.get("/api/user/").then((response) => response.data);

export const getOtherUserDataApi = (userId: number) =>
  axiosAPI.get(`/api/user/${userId}`).then((response) => response.data);
