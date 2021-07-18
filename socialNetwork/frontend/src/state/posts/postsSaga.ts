import { call, put, takeLatest } from "redux-saga/effects";
import { GetUserPosts } from "@/typing";
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

function* getFeedPostsWorker({ payload }: GetUserPosts): any {
  try {
    const data = yield call(api.getFeedPostsApi, payload);
    console.log(data);
    yield put(actions.getFeedPostsSuccess(data));
  } catch (error) {
    yield put(actions.getFeedPostsFailed);
  }
}

function* postsWatcher() {
  yield takeLatest(actions.getUserPosts.type, getUserPostsWorker);
  yield takeLatest(actions.getFeedPosts.type, getFeedPostsWorker);
}

export default postsWatcher;
