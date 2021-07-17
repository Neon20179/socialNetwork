import { axiosAPI } from "@/utils";

export const getUserDataApi = () =>
  axiosAPI.get("/api/user/").then((response) => response.data);
