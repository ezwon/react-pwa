import {
  call,
  put,
  takeEvery,
} from "redux-saga/effects";

import {
  DISCOUNTS_FIND_REQUEST,
  DISCOUNT_SAVE_REQUEST,
  DISCOUNT_REMOVE_REQUEST,
} from "./constants";

import {discountsFindDone} from "./actions";

import {find, create, patch, remove} from "../api";

const serviceName = "admin/discounts";

function* discountsFindRequest({payload}) {
  const result = yield call(find, serviceName, payload);
  if (result && !result.errors) {
    yield put(discountsFindDone(result));
  }
}

function* discountSaveRequest({payload}) {
  let result;
  if (payload.isNew) {
    result = yield call(create, serviceName, payload);
  } else {
    result = yield call(patch, serviceName, {id: payload.data._id, data: payload.data});
  }
  // console.log('result: ', result);
  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function") payload.onSuccess(result);
  }
}

function* discountRemoveRequest({payload}) {
  const result = yield call(remove, serviceName, payload);
  // console.log('result: ', result);
  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function") payload.onSuccess(result);
  }
}

export function* discountsSaga() {
  yield takeEvery(DISCOUNTS_FIND_REQUEST, discountsFindRequest);
  yield takeEvery(DISCOUNT_SAVE_REQUEST, discountSaveRequest);
  yield takeEvery(DISCOUNT_REMOVE_REQUEST, discountRemoveRequest);

}
