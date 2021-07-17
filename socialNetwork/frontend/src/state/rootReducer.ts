import { combineReducers } from "redux";

import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";
import postsReducer from "./posts/postsSlice";
import componentsReducer from "./components/componentsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  posts: postsReducer,
  components: componentsReducer
});

export default rootReducer;
