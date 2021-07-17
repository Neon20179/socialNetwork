import React, { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./state/user";
import { selectIsAuth } from "./selectors";
import routes from "./routes";

const App: FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) dispatch(getUserData());
  });

  return <>{routes}</>;
};

export default App;
