import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./userSlice";
import * as api from "./userApi";

function* getUserDataWorker(): any {
  try {
    const payload = yield call(api.getUserDataApi);
    yield put(actions.getUserDataSuccess(payload));
  } catch (error) {
    yield put(actions.getUserDataFailed());
  }
}

function* userWatcher() {
  yield takeLatest(actions.getUserData.type, getUserDataWorker);
}

export default userWatcher;
