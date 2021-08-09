import { call, put, takeLatest } from "redux-saga/effects";
import {
  AcceptFriendRequest,
  AddFriend,
  CancelFriendRequest,
  GetFriends,
  RejectFriendRequest,
  RemoveFriend,
} from "@/typing/actions";
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

function* getFriendRequestsWorker(): any {
  try {
    const requests = yield call(api.getFriendRequestsApi);
    yield put(actions.getFriendRequestSuccess(requests));
  } catch (error) {
    yield put(actions.getFriendRequestFailed());
  }
}

function* acceptFriendRequestWorker({ payload }: AcceptFriendRequest) {
  try {
    yield call(api.acceptFriendRequestApi, payload);
    yield put(actions.acceptFriendRequestSuccess());
  } catch (error) {
    yield put(actions.acceptFriendRequestFailed());
  }
}

function* rejectFriendRequestWorker({ payload }: RejectFriendRequest) {
  try {
    yield call(api.rejectFriendRequestApi, payload);
    yield put(actions.rejectFriendRequestSuccess());
  } catch (error) {
    yield put(actions.rejectFriendRequestFailed());
  }
}

function* cancelFriendRequestWorker({ payload }: CancelFriendRequest) {
  try {
    yield call(api.cancelFriendRequestApi, payload);
    yield put(actions.cancelFriendRequestSuccess());
  } catch (error) {
    yield put(actions.cancelFriendRequestFailed());
  }
}

function* getFriendNotificationsWorker(): any {
  try {
    const notifications = yield call(api.getFriendNotificationsApi);
    yield put(actions.getFriendNotificationsSuccess(notifications));
  } catch (error) {
    yield put(actions.getFriendNotificationsFailed());
  }
}

function* friendsWatcher() {
  yield takeLatest(actions.getFriends.type, getFriendsWorker);
  yield takeLatest(actions.addFriend.type, addFriendWorker);
  yield takeLatest(actions.removeFriend.type, removeFriendWorker);
  yield takeLatest(actions.getFriendRequests.type, getFriendRequestsWorker);
  yield takeLatest(actions.acceptFriendRequest.type, acceptFriendRequestWorker);
  yield takeLatest(actions.rejectFriendRequest.type, rejectFriendRequestWorker);
  yield takeLatest(actions.cancelFriendRequest.type, cancelFriendRequestWorker);
  yield takeLatest(
    actions.getFriendNotifications.type,
    getFriendNotificationsWorker
  );
}

export default friendsWatcher;
