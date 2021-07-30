import { User, Post, UserLink, Comment, OtherUser } from "./entities";

export interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
}

export interface UserState {
  user: User;
  otherUser: OtherUser;
  isLoading: boolean;
}

export interface PostsState {
  userPosts: Post[];
  otherUserPosts: Post[];
  currentPost: Post;
  feedPosts: Post[];
  isLoading: boolean;
}

export interface CommentsState {
  postComments: Comment[];
  isLoading: boolean;
}

export interface ComponentsState {
  activeNavbarLink: string;
}

export interface FriendsState {
  friends: UserLink[];
  isLoading: boolean;
}

export interface RootState {
  auth: AuthState;
  user: UserState;
  posts: PostsState;
  comments: CommentsState;
  components: ComponentsState;
  friends: FriendsState;
}
