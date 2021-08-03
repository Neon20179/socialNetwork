import { put, call, takeLatest } from "redux-saga/effects";
import { SignIn, SignUp } from "@/typing/actions";
import * as actions from "./authSlice";
import * as api from "./authApi";

function* signInWorker({ payload }: SignIn) {
  try {
    yield call(api.signInApi, payload);
    yield put(actions.signInSuccess());
  } catch (error) {
    yield put(actions.signInFailed());
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

function* signOutWorker() {
  try {
    yield call(api.signOutApi);
    yield put(actions.signOutSuccess());
  } catch (error) {
    yield put(actions.signOutFailed());
  }
}

function* authWatcher() {
  yield takeLatest(actions.signIn.type, signInWorker);
  yield takeLatest(actions.signUp.type, signUpWorker);
  yield takeLatest(actions.signOut.type, signOutWorker);
}

export default authWatcher;
