import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "@/state/auth";
import { selectIsAuth } from "@/selectors";
import { SingUpData } from "@/typing";
import SignUp from "./SignUp";

const SignUpContainer: FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  return (
    <SignUp
      isAuth={isAuth}
      signUp={(payload: SingUpData) => dispatch(signUp(payload))}
    />
  );
};

export default SignUpContainer;
