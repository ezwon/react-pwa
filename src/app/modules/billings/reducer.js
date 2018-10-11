import { handleActions} from "redux-actions";

import {
  billingsFindDone,
  billingsInvoicesFindDone,
  billingsTransactionsFindDone,
} from "./actions";

const initialState = {
  transactionsTable: {
    total: 0,
    limit: 0,
    skip: 0,
    data: [],
  },
  invoicesTable: {
    total: 0,
    limit: 0,
    skip: 0,
    data: [],
  },
};

export const billings = handleActions({
  [billingsFindDone]: (state = initialState, {payload}) => {
    const newState = Object.assign({}, state);
    newState.transactionsTable = payload.transactions;
    newState.invoicesTable = payload.invoices;
    return newState;
  },
  [billingsTransactionsFindDone]: (state = initialState, {payload}) => {
    const newState = Object.assign({}, state);
    newState.transactionsTable = payload;
    return newState;
  },
  [billingsInvoicesFindDone]: (state = initialState, {payload}) => {
    const newState = Object.assign({}, state);
    newState.invoicesTable = payload;
    return newState;
  },
}, initialState);
