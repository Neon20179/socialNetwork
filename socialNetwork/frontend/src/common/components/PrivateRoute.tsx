import React, { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { connect } from "react-redux";

type PrivateRouteProps = {
  component: React.ReactNode;
  isAuth: boolean;
} & RouteProps;

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const mapStateToProps = (state: StateTypes["AppStateType"]) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(PrivateRoute);
