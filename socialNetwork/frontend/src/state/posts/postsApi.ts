import { axiosAPI } from "@/utils";

export const getUserPostsApi = () =>
  axiosAPI.get("/api/feed/user_posts/").then((response) => response.data);

export const getFeedPostsApi = (currentPostsQuantity: number) =>
  axiosAPI
    .get(`/api/feed/?limit=5&offset=${currentPostsQuantity}`)
    .then((response) => response.data);
