import { call, put, takeLatest } from "redux-saga/effects";
import {
  GetPrivateChat,
  GetGroupChat,
  CreateGroupChat,
  CreatePrivateChat
} from "@/typing/actions";
import * as api from "./chatApi";
import * as actions from "./chatSlice";

function* getChatsWorker(): any {
  try {
    const chats = yield call(api.getChatsApi);
    yield put(actions.getChatsSuccess(chats));
  } catch (error) {
    yield put(actions.getChatsFailed());
  }
}

function* getPrivateChatWorker({ payload }: GetPrivateChat): any {
  try {
    const chat = yield call(api.getPrivateChatApi, payload);
    yield put(actions.getPrivateChatSuccess(chat));
  } catch (error) {
    yield put(actions.getPrivateChatFailed());
  }
}

function* getGroupChatWorker({ payload }: GetGroupChat): any {
  try {
    const chat = yield call(api.getGroupChatApi, payload);
    yield put(actions.getGroupChatSuccess(chat));
  } catch (error) {
    yield put(actions.getGroupChatFailed());
  }
}

function* createGroupChatWorker({ payload }: CreateGroupChat) {
  try {
    yield call(api.createGroupChatApi, payload);
    yield put(actions.createGroupChatSuccess());
  } catch (error) {
    yield put(actions.createGroupChatFailed());
  }
}

function* createPrivateChatWorker({ payload }: CreatePrivateChat) {
  try {
    yield call(api.createPrivateChatApi, payload);
    yield put(actions.createPrivateChatSuccess());
  } catch (error) {
    yield put(actions.createPrivateChatFailed());
  }
}

function* chatWatcher() {
  yield takeLatest(actions.getChats.type, getChatsWorker);
  yield takeLatest(actions.getPrivateChat.type, getPrivateChatWorker);
  yield takeLatest(actions.getGroupChat.type, getGroupChatWorker);
  yield takeLatest(actions.createGroupChat.type, createGroupChatWorker);
  yield takeLatest(actions.createPrivateChat.type, createPrivateChatWorker);
}

export default chatWatcher;
