import { call, put, takeLatest } from "redux-saga/effects";
import { CreateComment, GetPostComments, LikeComment } from "@/typing/actions";
import * as actions from "./commentsSlice";
import * as api from "./commentsApi";

function* getPostCommentsWorker({ payload }: GetPostComments): any {
  try {
    const comments = yield call(api.getPostCommentsApi, payload);
    yield put(actions.getPostCommentsSuccess(comments));
  } catch (error) {
    yield put(actions.getPostCommentsFailed());
  }
}

function* createComment({ payload }: CreateComment): any {
  try {
    const comments = yield call(api.createCommentApi, payload);
    yield put(actions.createCommentSuccess(comments));
  } catch (error) {
    yield put(actions.createCommentFailed());
  }
}

function* likeCommentWorker({ payload }: LikeComment) {
  try {
    yield call(api.likeCommentApi, payload);
    yield put(actions.likeCommentSuccess());
  } catch (error) {
    yield put(actions.likeCommentFailed());
  }
}

function* commentsWatcher() {
  yield takeLatest(actions.getPostComments.type, getPostCommentsWorker);
  yield takeLatest(actions.createComment.type, createComment);
  yield takeLatest(actions.likeComment.type, likeCommentWorker);
}

export default commentsWatcher;
