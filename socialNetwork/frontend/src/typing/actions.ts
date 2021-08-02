import { login, signUp } from "@/state/auth";
import {
  createPost,
  getSinglePost,
  getUserPosts,
  likePost
} from "@/state/posts";
import { createComment, getPostComments, likeComment } from "@/state/comments";
import { getFriends, addFriend, removeFriend } from "@/state/friends";
import { LoginData, SingUpData, CreatedComment } from "./entities";
import { getOtherUserData } from "@/state/user";
import { follow, unfollow } from "@/state/followers";
import {
  getPrivateChat,
  getGroupChat,
  createGroupChat,
  createPrivateChat
} from "@/state/chat";

export interface Login {
  type: typeof login.type;
  payload: LoginData;
}

export interface SignUp {
  type: typeof signUp.type;
  payload: SingUpData;
}

export interface GetOtherUserData {
  type: typeof getOtherUserData.type;
  payload: number;
}

export interface GetUserPosts {
  type: typeof getUserPosts.type;
  payload: number;
}

export interface GetOtherUserPosts {
  type: typeof getOtherUserData.type;
  payload: number;
}

export interface GetSinglePost {
  type: typeof getSinglePost.type;
  payload: number;
}

export interface LikePost {
  type: typeof likePost.type;
  payload: number;
}

export interface GetPostComments {
  type: typeof getPostComments.type;
  payload: number;
}

export interface CreateComment {
  type: typeof createComment.type;
  payload: CreatedComment;
}

export interface LikeComment {
  type: typeof likeComment.type;
  payload: number;
}

export interface CreatePost {
  type: typeof createPost.type;
  payload: FormData;
}

export interface GetFriends {
  type: typeof getFriends.type;
  payload: number;
}

export interface AddFriend {
  type: typeof addFriend.type;
  payload: number;
}

export interface RemoveFriend {
  type: typeof removeFriend.type;
  payload: number;
}

export interface Follow {
  type: typeof follow.type;
  payload: number;
}

export interface Unfollow {
  type: typeof unfollow.type;
  payload: number;
}

export interface GetPrivateChat {
  type: typeof getPrivateChat.type;
  payload: number;
}

export interface GetGroupChat {
  type: typeof getGroupChat.type;
  payload: number;
}

export interface CreateGroupChat {
  type: typeof createGroupChat.type;
  payload: FormData;
}

export interface CreatePrivateChat {
  type: typeof createPrivateChat.type;
  payload: number;
}
