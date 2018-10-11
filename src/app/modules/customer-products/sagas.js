import {call, put, takeEvery} from "redux-saga/effects";
import {customerProductChurnMessageRequestDone} from "./actions";

import {
  CUSTOMER_PRODUCTS_GET_REQUEST,
  CUSTOMER_PRODUCT_DETAIL_GET_REQUEST,
  CUSTOMER_TICKET_DETAIL_GET_REQUEST,
  CUSTOMER_PRODUCT_UPDATE_CUSTOM_VALUES_REQUEST,
  CUSTOMER_PRODUCT_CHURN_MESSAGE_REQUEST,

  CUSTOMER_PRODUCT_DEACTIVATE_SUBSCRIPTION_REQUEST,
  CUSTOMER_PRODUCT_MODIFY_SUBSCRIPTION_REQUEST,
  CUSTOMER_PRODUCT_REACTIVATE_SUBSCRIPTION_REQUEST,
} from "./constants";

import {
  customerProductsGetRequestDone,
  customerProductDetailGetRequestDone,
  customerTicketDetailGetRequestDone,
  customerProductUpdateCustomValuesRequestDone,

  customerProductDeactivateSubscriptionRequestDone,
  customerProductModifySubscriptionRequestDone,
  customerProductReactivateSubscriptionRequestDone,
} from "./actions";

import {find, get, setIsLoading, patch} from "../api";

const serviceName = {
  products: "client/products",
  productDetails: "client/product-details",
  updateProductCustomValues: "products/custom-values",
  churn: "/settings/churn-messages",
  deactivateSubscription: "products/cancel",
  reactivateSubscription: "products/reactivate",
  addOneTimeAddOn: "client/add-one-time-addon"
};


function* customerProductsGetRequest({payload}) {
  yield call(setIsLoading, true);
  yield put(customerProductsGetRequestDone([]));
  const result = yield call(find, serviceName.products, payload);

  if (result && !result.errors) {
    yield put(customerProductsGetRequestDone(result));
    yield call(setIsLoading, false);
  }
}

function* customerProductDetailGetRequest({payload}) {
  yield call(setIsLoading, true);
  const result = yield call(get, serviceName.products, {id: payload.id});
  if (result && !result.errors) {
    yield put(customerProductDetailGetRequestDone(result));
    yield call(setIsLoading, false);
  }
}

function* customerTicketDetailGetRequest({payload}) {
  yield call(setIsLoading, true);
  yield put(customerTicketDetailGetRequestDone({}));

  const result = yield call(find, serviceName.products, payload);
  if (result && !result.errors) {
    yield put(customerTicketDetailGetRequestDone(result));
    yield call(setIsLoading, false);
  }
}

function* customerProductUpdateCustomValuesRequest({payload}) {
  let result;

  result = yield call(patch, serviceName.updateProductCustomValues, {id: payload.data.id, data: payload.data});

  if (result && !result.errors) {
    customerProductUpdateCustomValuesRequestDone(result);
    if (payload.onSuccess && typeof payload.onSuccess === "function") payload.onSuccess(result);
  }
}

function* customerProductChurnMessageRequest({payload}) {
  const result = yield call(find, serviceName.churn, {branch_id: payload.branch_id});
  yield put(customerProductChurnMessageRequestDone(result));
}

function* customerProductDeactivateSubscriptionRequest({payload}) {
  let result;

  result = yield call(patch, serviceName.deactivateSubscription, {id: payload.data.id, data: payload.data});

  if (result && !result.errors) {
    customerProductDeactivateSubscriptionRequestDone(result);
    if (payload.onSuccess && typeof payload.onSuccess === "function") payload.onSuccess(result);
  }
}

function* customerProductReactivateSubscriptionRequest({payload}) {
  let result;

  result = yield call(patch, serviceName.deactivateSubscription, {id: payload.data.id, data: payload.data});

  if (result && !result.errors) {
    customerProductDeactivateSubscriptionRequestDone(result);
    if (payload.onSuccess && typeof payload.onSuccess === "function") payload.onSuccess(result);
  }
}

function* customerProductModifySubscriptionRequest({payload}) {
  let result;

  result = yield call(patch, serviceName.deactivateSubscription, {id: payload.data.id, data: payload.data});

  if (result && !result.errors) {
    customerProductDeactivateSubscriptionRequestDone(result);
    if (payload.onSuccess && typeof payload.onSuccess === "function") payload.onSuccess(result);
  }
}

export function* customerProductSaga() {
  yield takeEvery(CUSTOMER_PRODUCTS_GET_REQUEST, customerProductsGetRequest);
  yield takeEvery(CUSTOMER_PRODUCT_DETAIL_GET_REQUEST, customerProductDetailGetRequest);
  yield takeEvery(CUSTOMER_TICKET_DETAIL_GET_REQUEST, customerTicketDetailGetRequest);
  yield takeEvery(CUSTOMER_PRODUCT_UPDATE_CUSTOM_VALUES_REQUEST, customerProductUpdateCustomValuesRequest);
  yield takeEvery(CUSTOMER_PRODUCT_CHURN_MESSAGE_REQUEST, customerProductChurnMessageRequest);

  yield takeEvery(CUSTOMER_PRODUCT_DEACTIVATE_SUBSCRIPTION_REQUEST, customerProductDeactivateSubscriptionRequest);
  yield takeEvery(CUSTOMER_PRODUCT_REACTIVATE_SUBSCRIPTION_REQUEST, customerProductReactivateSubscriptionRequest);
  yield takeEvery(CUSTOMER_PRODUCT_MODIFY_SUBSCRIPTION_REQUEST, customerProductModifySubscriptionRequest);

}
