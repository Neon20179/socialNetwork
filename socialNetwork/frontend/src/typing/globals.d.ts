import { compose } from "redux";
import rootReducer from "../state/rootReducer";

type RootReducerType = typeof rootReducer;
type AppStateType = ReturnType<RootReducerType>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }

  interface StateTypes {
    AppStateType: ReturnType<RootReducerType>;
  }
}
