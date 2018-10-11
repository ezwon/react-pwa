import { handleAction, handleActions } from "redux-actions";

import {
  customersFindDone,
  customerProductsFindDone,
  customerTransactionsFindDone,
  customerInvoicesFindDone,
  customerBillingFindRequestDone,
  customerBillingSetLoading,
} from "./actions";
import { list } from "../common/initialState" ;

const listInitialState = Object.assign({},list);
const initialState = {
  isLoading: false,
};

export const customersTable = handleAction(customersFindDone, {
  next(state, { payload }) {
    return payload;
  },
}, listInitialState);

export const customers = handleActions({
  [customerBillingSetLoading]: (state = initialState, {payload}) => {
    state[payload.id] = {};
    state[payload.id].isLoading = payload.isLoading;
    return Object.assign({}, state);
  },
  [customerBillingFindRequestDone]: (state = initialState, {payload}) => {
    state[payload.id].productsTable = payload.products;
    state[payload.id].transactionsTable = payload.transactions;
    state[payload.id].invoicesTable = payload.invoices;
    state[payload.id].isLoading = false;
    return Object.assign({}, state);
  },
  [customerProductsFindDone]: (state = initialState, {payload}) => {
    state[payload.id].productsTable = payload.products;
    state[payload.id].isLoading = false;
    return Object.assign({}, state);
  },
  [customerTransactionsFindDone]: (state = initialState, {payload}) => {
    state[payload.id].transactionsTable = payload.transactions;
    state[payload.id].isLoading = false;
    return Object.assign({}, state);
  },
  [customerInvoicesFindDone]: (state = initialState, {payload}) => {
    state[payload.id].invoicesTable = payload.invoices;
    state[payload.id].isLoading = false;
    return Object.assign({}, state);
  },
}, initialState);
