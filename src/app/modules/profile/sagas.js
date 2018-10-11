import { call, put, takeEvery } from "redux-saga/effects";

import {
  PROFILE_GET_USER_DETAILS,
  PROFILE_UPDATE_USER_DETAILS,
  PROFILE_CHANGE_PASSWORD,
  PROFILE_UPDATE_USER_IMAGE,
  PROFILE_UPDATE_BACKUP_EMAIL,
  PROFILE_GET_OTHER_USER_DETAILS,
} from "./constants";

import {
  profileGetUserDetailsDone,
  profileUpdateUserDetailsDone,
  profileUpdateUserImageDone,
  profileGetOtherUserDetailsDone,
} from "./actions";

import { get, patch } from "../api";

const serviceName = {
  customers: "client/customers",
  users: "users",
};

export function* profileSaga() {
  yield takeEvery(PROFILE_GET_USER_DETAILS, profileGetUserDetails);
  yield takeEvery(PROFILE_UPDATE_USER_DETAILS, profileUpdateUserDetails);
  yield takeEvery(PROFILE_UPDATE_USER_IMAGE, profileUpdateUserImage);
  yield takeEvery(PROFILE_UPDATE_BACKUP_EMAIL, profileUpdateUserData);
  yield takeEvery(PROFILE_CHANGE_PASSWORD, profileUpdateUserData);
  yield takeEvery(PROFILE_GET_OTHER_USER_DETAILS, profileGetOtherUserDetails);
}

function* profileGetUserDetails({ payload }) {
  const result = yield call(get, serviceName.customers, { id: payload.id });
  if (result && !result.errors) {
    yield put(profileGetUserDetailsDone(result));
    if (payload.onSuccess && typeof payload.onSuccess === "function") {
      payload.onSuccess(result);
    }
  }
}

function* profileUpdateUserDetails({ payload }) {
  const result = yield call(patch, serviceName.customers, {
    id: payload.payload._id,
    data: payload.payload,
  });
  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function") {
      payload.onSuccess(result);
    }
    yield put(profileUpdateUserDetailsDone());
  }
}

function* profileGetOtherUserDetails({ payload }) {
  const result = yield call(get, serviceName.users, { id: payload });
  if (result && !result.errors) {
    yield put(profileGetOtherUserDetailsDone(result));
  }
}

function* profileUpdateUserData({ payload }) {
  const result = yield call(
    patch,
    serviceName.users,
    {
      id: payload.id.split("\\|")[0],
      data: payload.data,
    },
    true
  );
  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function") {
      payload.onSuccess(result);
    }
  }
}

function* profileUpdateUserImage({ payload }) {
  const result = yield call(patch, `${serviceName.users}/${payload.id}`, {
    id: "avatars",
    data: payload.data,
    headers: {
      "Content-Type": undefined,
    },
  });
  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function") {
      payload.onSuccess(result);
    }
    yield put(profileUpdateUserImageDone());
  }
}
