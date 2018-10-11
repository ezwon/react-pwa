import {call, put, takeEvery} from "redux-saga/effects";
import {
  productsRequestDone,
  productsListDone,
} from "./actions";

import {find, remove, patch, create, get} from "../api";
import {
  PRODUCTS_LIST_REQUEST, PRODUCTS_FIND_REQUEST,
  PRODUCT_SAVE_REQUEST, PRODUCT_REMOVE_REQUEST,
  PRODUCTS_GET_REQUEST, PRODUCT_SAVE_CUSTOM_FIELDS_REQUEST,
} from "./constants";

const serviceName = {
  adminProducts: "admin/products",
  adminProductsCustomFields: "admin/product-customs",
  publicProducts: "list/products",
};

function* productsListRequest({payload}) {
  const result = yield call(find, serviceName.publicProducts, payload);
  if (result && !result.errors) {
    yield put(productsListDone(result));
  }
}

function* productsFindRequest({payload}) {
  const result = yield call(find, serviceName.adminProducts, payload, false);
  if (result && !result.errors) {
    yield put(productsRequestDone(result));

    if (payload.onSuccess && typeof payload.onSuccess === "function")
      payload.onSuccess(result);
  } else {
    if (payload.onError && typeof payload.onError === "function")
      payload.onError(result);
  }
}

function* productsGetRequest({payload}) {
  const result = yield call(get, serviceName.adminProducts, {id: payload.id});
  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function")
      payload.onSuccess(result);
  } else {
    if (payload.onError && typeof payload.onError === "function")
      payload.onError(result);
  }
}

function* productSaveRequest({payload}) {
  let result;
  if (payload.isNew) {
    result = yield call(create, serviceName.adminProducts, payload);
  } else {
    result = yield call(patch, serviceName.adminProducts, {id: payload.data._id, data: payload.data});
  }
  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function") payload.onSuccess(result);
  }
}

function* productSaveCustomFields({payload}) {
  let result = yield call(create, serviceName.adminProductsCustomFields, payload);

  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function") payload.onSuccess(result);
  }
}

function* productRemoveRequest({payload}) {
  const result = yield call(remove, serviceName.adminProducts, payload);
  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function") payload.onSuccess(result);
  }
}

export function* productsSaga() {
  yield takeEvery(PRODUCTS_GET_REQUEST, productsGetRequest);
  yield takeEvery(PRODUCTS_FIND_REQUEST, productsFindRequest);
  yield takeEvery(PRODUCTS_LIST_REQUEST, productsListRequest);
  yield takeEvery(PRODUCT_SAVE_REQUEST, productSaveRequest);
  yield takeEvery(PRODUCT_SAVE_CUSTOM_FIELDS_REQUEST, productSaveCustomFields);
  yield takeEvery(PRODUCT_REMOVE_REQUEST, productRemoveRequest);
}
