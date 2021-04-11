import React, { FC } from "react";
import { connect } from "react-redux";
import { signUp } from "../../state/auth/authActions";
import SignUp from "./SignUp";
import { SignUpProps } from "./signUpTypes";

const SignUpContainer: FC<SignUpProps> = ({ isAuth, signUp }) => {
  return <SignUp isAuth={isAuth} signUp={signUp} />;
};

const mapStateToProps = (state: StateTypes["AppStateType"]) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { signUp })(SignUpContainer);
