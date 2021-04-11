import React, { useEffect, FC } from "react";
import { connect } from "react-redux";
import { getUserData } from "./state/user/userActions";
import routes from "./routes";

interface AppProps {
  isAuth: boolean;
  getUserData: () => void;
}

const App: FC<AppProps> = ({ isAuth, getUserData }) => {
  useEffect(() => {
    if (isAuth) getUserData();
  });

  return <>{routes}</>;
};

const mapStateToProps = (state: StateTypes["AppStateType"]) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { getUserData })(App);
