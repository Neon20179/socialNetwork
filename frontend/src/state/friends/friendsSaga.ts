import { call, put, takeLatest } from "redux-saga/effects";
import { AddFriend, GetFriends, RemoveFriend } from "@/typing/actions";
import * as api from "./friendsApi";
import * as actions from "./friendsSlice";

function* getFriendsWorker({ payload }: GetFriends): any {
  try {
    const friends = yield call(api.getFriendsApi, payload);
    yield put(actions.getFriendsSuccess(friends));
  } catch (error) {
    yield put(actions.getFriendsFailed);
  }
}

function* addFriendWorker({ payload }: AddFriend) {
  try {
    yield call(api.addFriendApi, payload);
    yield put(actions.addFriendSuccess());
  } catch (error) {
    yield put(actions.addFriendFailed());
  }
}

function* removeFriendWorker({ payload }: RemoveFriend) {
  try {
    yield call(api.removeFriendApi, payload);
    yield put(actions.removeFriendSuccess());
  } catch (error) {
    yield put(actions.removeFriendFailed());
  }
}

function* friendsWatcher() {
  yield takeLatest(actions.getFriends.type, getFriendsWorker);
  yield takeLatest(actions.addFriend.type, addFriendWorker);
  yield takeLatest(actions.removeFriend.type, removeFriendWorker);
}

export default friendsWatcher;
