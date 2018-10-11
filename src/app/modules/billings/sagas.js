import {call, put, takeEvery} from "redux-saga/effects";

import {
  BILLINGS_FIND_REQUEST,
  BILLINGS_TRANSACTION_FIND_REQUEST,
  BILLINGS_INVOICES_FIND_REQUEST,
} from "./constants";

import {
  billingsTransactionsFindDone,
  billingsInvoicesFindDone,
  billingsFindDone,
} from "./actions";

import {find, setIsLoading} from "../api";

const serviceName = {
  transactions: "client/transactions",
  invoices: "client/invoices",
};


function* billingsFindRequest({payload}) {
  yield call(setIsLoading, true);

  const billing = {
    transactions: {},
    invoices: {},
  };
  
  const transactionsResult = yield call(find,serviceName.transactions, payload, false);
  const invoicesResult = yield call(find, serviceName.invoices, payload, false);

  if (transactionsResult && !transactionsResult.errors) {
    billing.transactions = transactionsResult;
  }

  if (invoicesResult && !invoicesResult.errors) {
    billing.invoices = invoicesResult;
  }

  yield put(billingsFindDone(billing));
  yield call(setIsLoading, false);
}

function* billingTransactionsFindRequest({payload}) {
  const result = yield call(find, serviceName.transactions, payload);
  if (result && !result.errors) {
    yield put(billingsTransactionsFindDone(result));
  }
}

function* billingInvoicesFindRequest({payload}) {
  const result = yield call(find, serviceName.invoices, payload);
  if (result && !result.errors) {
    yield put(billingsInvoicesFindDone(result));
  }
}

export function* billingsSaga() {
  yield takeEvery(BILLINGS_FIND_REQUEST, billingsFindRequest);
  yield takeEvery(BILLINGS_TRANSACTION_FIND_REQUEST, billingTransactionsFindRequest);
  yield takeEvery(BILLINGS_INVOICES_FIND_REQUEST, billingInvoicesFindRequest);
}
