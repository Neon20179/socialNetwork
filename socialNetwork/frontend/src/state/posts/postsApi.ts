import { axiosAPI } from "@/utils";

export const getUserPostsApi = () =>
  axiosAPI.get("/api/feed/user_posts/").then((response) => response.data);
