import {createAction} from "redux-actions";
import {
  CUSTOMERS_FIND_REQUEST, CUSTOMERS_FIND_DONE, CUSTOMER_SAVE_REQUEST,
  CUSTOMER_INVOICES_FIND_REQUEST, CUSTOMER_INVOICES_FIND_DONE,
  CUSTOMER_PRODUCTS_FIND_REQUEST, CUSTOMER_PRODUCTS_FIND_DONE,
  CUSTOMER_TRANSACTIONS_FIND_REQUEST, CUSTOMER_TRANSACTIONS_FIND_DONE,
  CUSTOMER_BILLING_FIND_REQUEST,
  CUSTOMER_BILLING_FIND_REQUEST_DONE,
  CUSTOMER_BILLING_SET_LOADING,
} from "./constants";

export const customersFindRequest = createAction(CUSTOMERS_FIND_REQUEST);
export const customersFindDone = createAction(CUSTOMERS_FIND_DONE);
export const customerSaveRequest = createAction(CUSTOMER_SAVE_REQUEST);

export const customerInvoicesFindRequest = createAction(CUSTOMER_INVOICES_FIND_REQUEST);
export const customerInvoicesFindDone = createAction(CUSTOMER_INVOICES_FIND_DONE);
export const customerProductsFindRequest = createAction(CUSTOMER_PRODUCTS_FIND_REQUEST);
export const customerProductsFindDone = createAction(CUSTOMER_PRODUCTS_FIND_DONE);
export const customerTransactionsFindRequest = createAction(CUSTOMER_TRANSACTIONS_FIND_REQUEST);
export const customerTransactionsFindDone = createAction(CUSTOMER_TRANSACTIONS_FIND_DONE);

export const customerBillingFindRequest = createAction(CUSTOMER_BILLING_FIND_REQUEST);
export const customerBillingFindRequestDone = createAction(CUSTOMER_BILLING_FIND_REQUEST_DONE);

export const customerBillingSetLoading = createAction(CUSTOMER_BILLING_SET_LOADING);
