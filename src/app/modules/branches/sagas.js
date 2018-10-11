import { call, put, takeEvery } from "redux-saga/effects";
import { find } from "../api";
import {
  GET_ALL_ORGS_REQUEST, getAllOrgsDone, branchesListDone,
} from "./actions";
import { BRANCHES_LIST_REQUEST } from "./constants";

const listServiceName = "list/branches";

function* getAllOrgs() {
  try {
    yield put(getAllOrgsDone({ data: [], loading: true }));
    const orgs = yield call(find, listServiceName, null);
    yield put(getAllOrgsDone({ data: orgs.data, loading: false }));
  } catch (e) {
    //
  }
}

function* branchesListRequest() {
  const result = yield call(find, listServiceName);
  if (result && !result.errors) {
    yield put(branchesListDone(result));
  }
}

export function* branchGetSaga() {
  yield takeEvery(GET_ALL_ORGS_REQUEST, getAllOrgs);
  yield takeEvery(BRANCHES_LIST_REQUEST, branchesListRequest);
}
