export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  sex: "M" | "F" | "N";
  bio: string;
  avatar_image: string;
  header_image: string;
  user_images: string[];
  followers_quantity: number;
  following_quantity: number;
}

export interface OtherUser extends User {
  is_following: boolean;
  is_friend: boolean;
}

export interface UserLink {
  id: number;
  username: string;
  avatar_image: string;
}

export interface PostImage {
  id: number;
  user: number;
  image: string;
}

export interface Post {
  id: number;
  is_liked: boolean;
  user: UserLink;
  content: string;
  created_at: string;
  likes: number;
  post_images?: PostImage[];
}

export interface CreatedPost {
  content: string;
  post_images?: {
    image: string;
  };
}

export interface Comment {
  id: number;
  is_liked: boolean;
  user: UserLink;
  content: string;
  created_at: string;
  likes: number;
  children: Comment[];
}

export interface CreatedComment {
  post: number;
  content: string;
  replay_to: number;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface SingUpData extends LoginData {
  email: string;
}

export enum NavbarLinks {
  FEED = "FEED",
  CHATS = "CHATS",
  FRIENDS = "FRIENDS",
  ADD_POST = "ADD_POST",
  PROFILE = "PROFILE"
}
