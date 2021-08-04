import { call, put, takeLatest } from "redux-saga/effects";
import {
  CreatePost,
  GetOtherUserPosts,
  GetSinglePost,
  GetUserPosts,
  LikePost
} from "@/typing/actions";
import * as actions from "./postsSlice";
import * as api from "./postsApi";

function* getUserPostsWorker(): any {
  try {
    const payload = yield call(api.getUserPostsApi);
    yield put(actions.getUserPostsSuccess(payload));
  } catch (error) {
    yield put(actions.getUserPostsFailed());
  }
}

function* getOtherUserPostsWorker({ payload }: GetOtherUserPosts): any {
  try {
    const otherUserPosts = yield call(api.getOtherUserPostsApi, payload);
    yield put(actions.getOtherUserPostsSuccess(otherUserPosts));
  } catch (error) {
    yield put(actions.getOtherUserPostsFailed());
  }
}

function* createPostWorker({ payload }: CreatePost) {
  try {
    yield call(api.createPostApi, payload);
    yield put(actions.createPostSuccess());
  } catch (error) {
    yield put(actions.createPostFailed());
  }
}

function* getSinglePostWorker({ payload }: GetSinglePost): any {
  try {
    const post = yield call(api.getSinglePost, payload);
    yield put(actions.getSinglePostSuccess(post));
  } catch (error) {
    yield put(actions.getSinglePostFailed);
  }
}

function* getFeedPostsWorker({ payload }: GetUserPosts): any {
  try {
    const feedPosts = yield call(api.getFeedPostsApi, payload);
    yield put(actions.getFeedPostsSuccess(feedPosts));
  } catch (error) {
    yield put(actions.getFeedPostsFailed);
  }
}

function* likePostWorker({ payload }: LikePost) {
  try {
    yield call(api.likePostApi, payload);
    yield put(actions.likePostSuccess());
  } catch (error) {
    yield put(actions.likePostFailed());
  }
}

function* postsWatcher() {
  yield takeLatest(actions.getUserPosts.type, getUserPostsWorker);
  yield takeLatest(actions.getOtherUserPosts.type, getOtherUserPostsWorker);
  yield takeLatest(actions.createPost.type, createPostWorker);
  yield takeLatest(actions.getSinglePost.type, getSinglePostWorker);
  yield takeLatest(actions.getFeedPosts.type, getFeedPostsWorker);
  yield takeLatest(actions.likePost.type, likePostWorker);
}

export default postsWatcher;
