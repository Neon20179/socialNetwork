import { put, call, takeLatest } from "redux-saga/effects";
import { Login, SignUp } from "@/typing/actions";
import * as actions from "./authSlice";
import * as api from "./authApi";

function* loginWorker({ payload }: Login) {
  try {
    yield call(api.loginApi, payload);
    yield put(actions.loginSuccess());
  } catch (error) {
    yield put(actions.loginFailed());
  }
}

function* signUpWorker({ payload }: SignUp) {
  try {
    yield call(api.signUpApi, payload);
    yield put(actions.signUpSuccess());
  } catch (error) {
    yield put(actions.signUpFailed());
  }
}

function* logoutWorker() {
  try {
    yield call(api.logoutApi);
    yield put(actions.logoutSuccess);
  } catch (error) {
    yield put(actions.loginFailed);
  }
}

function* authWatcher() {
  yield takeLatest(actions.login.type, loginWorker);
  yield takeLatest(actions.signUp.type, signUpWorker);
  yield takeLatest(actions.logout.type, logoutWorker);
}

export default authWatcher;
