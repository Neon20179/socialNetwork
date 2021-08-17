import { axiosAPI } from "@/utils";
import { CreatedComment } from "@/typing/entities";
import { HOST } from "@/env";

const getRootCommentsUrl = (postId: number) =>
  HOST + `/api/feed/${postId}/comments/`;

export const getPostCommentsApi = (postId: number) =>
  axiosAPI.get(getRootCommentsUrl(postId)).then((response) => response.data);

export const createCommentApi = (comment: CreatedComment) =>
  axiosAPI
    .post(getRootCommentsUrl(comment.post), comment)
    .then((response) => response.data);

export const likeCommentApi = (commentId: number) =>
  axiosAPI
    .post(HOST + "/api/feed/like_unlike_comment/", { comment_id: commentId })
    .then((response) => response.data);
