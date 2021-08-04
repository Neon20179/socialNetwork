import { call, put, takeLatest } from "redux-saga/effects";
import { Follow, Unfollow } from "@/typing/actions";
import * as api from "./followersApi";
import * as actions from "./followersSlice";

function* followWorker({ payload }: Follow) {
  try {
    yield call(api.followApi, payload);
    yield put(actions.followSuccess());
  } catch (error) {
    yield put(actions.followFailed());
  }
}

function* unfollowWorker({ payload }: Unfollow) {
  try {
    yield call(api.unfollowApi, payload);
    yield put(actions.unfollowSuccess());
  } catch (error) {
    yield put(actions.unfollowFailed());
  }
}

function* followersWatcher() {
  yield takeLatest(actions.follow.type, followWorker);
  yield takeLatest(actions.unfollow.type, unfollowWorker);
}

export default followersWatcher;
