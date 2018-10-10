import {put, takeEvery} from "redux-saga/effects";

import {IS_LOADING, IS_SAVING, SET_MESSAGE} from "./constants";

import {
  isLoading,
  isSaving,
  setMessage,
} from "./actions";

function* isLoadingRequest({payload}) {
  yield put(isLoading(payload));
}

export function* isLoadingSaga() {
  yield takeEvery(IS_LOADING, isLoadingRequest);
}

function* isSavingRequest({payload}) {
  yield put(isSaving(payload));
}

export function* isSavingSaga() {
  yield takeEvery(IS_SAVING, isSavingRequest);
}

function* setMessageRequest({payload}) {
  yield put(setMessage(payload));
}

export function* setMessageSaga() {
  yield takeEvery(SET_MESSAGE, setMessageRequest);
}
