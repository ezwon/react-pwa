import { call, put, takeEvery } from "redux-saga/effects";
import { find } from "../api";
import { GET_ALL_EVENTS_BY_PRODUCT_REQUEST, getAllEventsByProductDone, eventsListDone } from "./actions";
import { EVENTS_LIST_REQUEST } from "./constants";

const listServiceName = "list/events";

const serviceName = "admin/events";

function* getEventsByProduct({ payload }) {
  try {
    yield put(getAllEventsByProductDone({ data: [], loading: true }));
    const events = yield call(find, serviceName, { branch_id: payload });
    yield put(getAllEventsByProductDone({ data: events.data, loading: false }));
  } catch (e) {
    //
  }
}

function* eventsListRequest() {
  const result = yield call(find, listServiceName);
  if (result && !result.errors) {
    yield put(eventsListDone(result));
  }
}

export function* eventsSaga() {
  yield takeEvery(GET_ALL_EVENTS_BY_PRODUCT_REQUEST, getEventsByProduct);
  yield takeEvery(EVENTS_LIST_REQUEST, eventsListRequest);
}


