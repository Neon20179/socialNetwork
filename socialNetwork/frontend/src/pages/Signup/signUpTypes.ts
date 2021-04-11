import { SingUpDataType } from "../../state/auth/authTypes";

export interface SignUpProps {
  signUp: (data: SingUpDataType) => void;
  isAuth: boolean;
}
