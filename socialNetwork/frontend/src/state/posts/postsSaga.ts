import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./postsSlice";
import * as api from "./postsApi";

function* getUserPostsWorker(): any {
  try {
    const payload = yield call(api.getUserPostsApi);
    yield put(actions.getUserPostsSuccess(payload));
  } catch (error) {
    yield put(actions.getUserPostsFailed);
  }
}

function* postsWatcher() {
  yield takeLatest(actions.getUserPosts.type, getUserPostsWorker);
}

export default postsWatcher;
