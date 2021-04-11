import initialState from "./userState";
import * as types from "./userConstants";

export type InitialState = typeof initialState;

export type UserType = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  sex: "M" | "F" | "N";
  bio: string;
  avatar_image: string;
  header_image: string;
  user_images: string;
};

type GetUserDataAction = {
  type: typeof types.GET_USER_DATA;
  user: UserType;
};

export type ActionTypes = GetUserDataAction;
