import { LoginDataType } from "../../state/auth/authTypes";

export interface LoginProps {
  login: (data: LoginDataType) => void;
  isAuth: boolean;
}
