import { login, signUp } from "@/state/auth";

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  sex: "M" | "F" | "N";
  bio: string;
  avatar_image: string;
  header_image: string;
  user_images: string[];
  followers_quantity: number;
  following_quantity: number;
}

export interface PostImage {
  id: number;
  user: number;
  image: string;
}

export interface Post {
  id: number;
  user: number;
  content: string;
  created_at: string;
  likes: number;
  post_images?: PostImage[];
}

export interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
}

export interface UserState {
  data: User;
  isLoading: boolean;
}

export interface PostsState {
  userPosts: Post[];
  isLoading: boolean;
}

export interface ComponentsState {
  activeNavbarLink: string;
}

export interface RootState {
  auth: AuthState;
  user: UserState;
  posts: PostsState;
  components: ComponentsState;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface SingUpData extends LoginData {
  email: string;
}

export interface Login {
  type: typeof login.type;
  payload: LoginData;
}

export interface SignUp {
  type: typeof signUp.type;
  payload: SingUpData;
}

export enum NavbarLinks {
  FEED = "FEED",
  CHATS = "CHATS",
  FRIENDS = "FRIENDS",
  ADD_POST = "ADD_POST",
  PROFILE = "PROFILE"
}
