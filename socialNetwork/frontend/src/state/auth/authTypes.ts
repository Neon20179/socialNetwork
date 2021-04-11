import * as constants from "./authConstants";
import initialState from "./authState";

export type InitialState = typeof initialState;

export type LoginDataType = {
  username: string;
  password: string;
};

export type SingUpDataType = LoginDataType & {
  email: string;
};

// Action Types
type LoginActionType = {
  type: typeof constants.LOGIN_STATUS;
  status: boolean;
};

export type ActionTypes = LoginActionType;
