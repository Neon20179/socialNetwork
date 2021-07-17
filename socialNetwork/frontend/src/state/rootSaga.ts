import { all } from "redux-saga/effects";
import authWatcher from "./auth/authSaga";
import postsWatcher from "./posts/postsSaga";
import userWatcher from "./user/userSaga";

function* rootSaga() {
  yield all([authWatcher(), userWatcher(), postsWatcher()]);
}

export default rootSaga;
