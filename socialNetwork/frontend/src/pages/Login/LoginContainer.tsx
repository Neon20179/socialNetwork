import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/state/auth";
import { selectIsAuth } from "@/selectors";
import { LoginData } from "@/typing";
import Login from "./Login";

const LoginContainer: FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  return (
    <Login
      isAuth={isAuth}
      login={(payload: LoginData) => dispatch(login(payload))}
    />
  );
};

export default LoginContainer;
