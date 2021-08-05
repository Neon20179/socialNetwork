import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./userSlice";
import * as api from "./userApi";
import { EditUser, FindUser, GetOtherUserData } from "@/typing/actions";

function* getUserDataWorker(): any {
  try {
    const payload = yield call(api.getUserDataApi);
    yield put(actions.getUserDataSuccess(payload));
  } catch (error) {
    yield put(actions.getUserDataFailed());
  }
}

function* getOtherUserDataWorker({ payload }: GetOtherUserData): any {
  try {
    const otherUserData = yield call(api.getOtherUserDataApi, payload);
    yield put(actions.getOtherUserDataSuccess(otherUserData));
  } catch (error) {
    yield put(actions.getOtherUserDataFailed());
  }
}

function* findUserWorker({ payload }: FindUser): any {
  try {
    const result = yield call(api.findUserApi, payload);
    yield put(actions.findUserSuccess(result));
  } catch (error) {
    yield put(actions.findUserFailed());
  }
}

function* editUserWorker({ payload }: EditUser) {
  try {
    yield call(api.editUserApi, payload);
    yield put(actions.editUserSuccess());
  } catch (error) {
    yield put(actions.editUserFailed());
  }
}

function* userWatcher() {
  yield takeLatest(actions.getUserData.type, getUserDataWorker);
  yield takeLatest(actions.getOtherUserData.type, getOtherUserDataWorker);
  yield takeLatest(actions.findUser.type, findUserWorker);
  yield takeLatest(actions.editUser.type, editUserWorker);
}

export default userWatcher;
