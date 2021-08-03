import React, { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "@/selectors";

const PrivateRoute: FC<RouteProps> = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/sign_in/", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
