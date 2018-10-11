import { call, put, takeEvery } from "redux-saga/effects";

import {
  DASHBOARD_ACTION,
} from "./constants";

import {
  dashboardAction
} from "./actions";

import { get } from "../api";

const serviceName = {
  customers: "client/customers",
  users: "users",
};

export function* dashboardSaga() {
  yield takeEvery(DASHBOARD_ACTION, dashboardGetAction);
}

function* dashboardGetAction({ payload }) {
  const result = yield call(get, serviceName.customers, { id: payload.id });
  if (result && !result.errors) {
    yield put(dashboardAction(result));
    if (payload.onSuccess && typeof payload.onSuccess === "function") {
      payload.onSuccess(result);
    }
  }
}

