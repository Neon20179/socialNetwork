import { combineReducers } from "redux";

import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";
import postsReducer from "./posts/postsSlice";
import commentsReducer from "./comments/commentsSlice";
import componentsReducer from "./components/componentsSlice";
import friendsReducer from "./friends/friendsSlice";
import followersReducer from "./followers/followersSlice";
import chatReducer from "./chat/chatSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  posts: postsReducer,
  comments: commentsReducer,
  components: componentsReducer,
  friends: friendsReducer,
  followers: followersReducer,
  chat: chatReducer
});

export default rootReducer;