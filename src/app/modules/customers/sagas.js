import {call, put, takeEvery} from "redux-saga/effects";

import {
  CUSTOMERS_FIND_REQUEST,
  CUSTOMER_SAVE_REQUEST,

  CUSTOMER_PRODUCTS_FIND_REQUEST,
  CUSTOMER_TRANSACTIONS_FIND_REQUEST,
  CUSTOMER_INVOICES_FIND_REQUEST,

  CUSTOMER_BILLING_FIND_REQUEST,
} from "./constants";
import {
  customersFindDone,
  customerInvoicesFindDone,
  customerProductsFindDone,
  customerTransactionsFindDone,
  customerBillingFindRequestDone,
  customerBillingSetLoading,
} from "./actions";
import {find, patch} from "../api";

const serviceName = {
  customers: "client/customers",
  transactions: "client/transactions",
  products: "client/products",
  invoices: "client/invoices",
};

function* customersFindRequest({payload}) {
  const result = yield call(find, serviceName.customers, payload);
  if (result && !result.errors) {
    yield put(customersFindDone(result));
  }
}

function* customerSaveRequest({payload}) {
  const result = yield call(patch, serviceName.customers, payload);
  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function") payload.onSuccess(result);
  }
}

function* customerProductsFindRequest({payload}) {
  yield put(customerBillingSetLoading(true));
  const result = yield call(find, serviceName.products, payload);
  if (result && !result.errors) {
    yield put(customerProductsFindDone({id: payload.created_by, products: result}));
  }
}

function* customerTransactionsFindRequest({payload}) {
  yield put(customerBillingSetLoading(true));
  const result = yield call(find, serviceName.transactions, payload);
  if (result && !result.errors) {
    yield put(customerTransactionsFindDone({id: payload.created_by, transactions: result}));
  }
}

function* customerInvoicesFindRequest({payload}) {
  yield put(customerBillingSetLoading(true));
  const result = yield call(find, serviceName.invoices, payload);
  if (result && !result.errors) {
    yield put(customerInvoicesFindDone({id: payload.created_by, invoices: result}));
  }
}

function* customerBillingFindRequest({payload}) {
  const billing = {
    id: payload.created_by,
    products: {},
    transactions: {},
    invoices: {},
  };

  yield put(customerBillingSetLoading({id: billing.id, isLoading: true}));

  const productsResult = yield call(find, serviceName.products, payload, false);
  const transactionsResult = yield call(find, serviceName.transactions, payload, false);
  const invoicesResult = yield call(find, serviceName.invoices, payload, false);

  if (productsResult && !productsResult.errors) {
    billing.products = productsResult;
  }

  if (transactionsResult && !transactionsResult.errors) {
    billing.transactions = transactionsResult;
  }

  if (invoicesResult && !invoicesResult.errors) {
    billing.invoices = invoicesResult;
  }

  yield put(customerBillingFindRequestDone(billing));
}

export function* customersSaga() {
  yield takeEvery(CUSTOMER_SAVE_REQUEST, customerSaveRequest);
  yield takeEvery(CUSTOMERS_FIND_REQUEST, customersFindRequest);
  yield takeEvery(CUSTOMER_PRODUCTS_FIND_REQUEST, customerProductsFindRequest);
  yield takeEvery(CUSTOMER_TRANSACTIONS_FIND_REQUEST, customerTransactionsFindRequest);
  yield takeEvery(CUSTOMER_INVOICES_FIND_REQUEST, customerInvoicesFindRequest);
  yield takeEvery(CUSTOMER_BILLING_FIND_REQUEST, customerBillingFindRequest);
}
