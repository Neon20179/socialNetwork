import React, { FC } from "react";
import { connect } from "react-redux";
import { login } from "../../state/auth/authActions";
import Login from "./Login";
import { LoginProps } from "./loginTypes";

const LoginContainer: FC<LoginProps> = ({ isAuth, login }) => {
  return <Login isAuth={isAuth} login={login} />;
};

const mapStateToProps = (state: StateTypes["AppStateType"]) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(LoginContainer);
