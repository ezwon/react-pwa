import {createAction} from "redux-actions";
import {
  BILLINGS_FIND_REQUEST, BILLINGS_FIND_DONE,
  BILLINGS_INVOICES_FIND_REQUEST, BILLINGS_INVOICES_FIND_DONE,
  BILLINGS_TRANSACTION_FIND_REQUEST, BILLINGS_TRANSACTION_FIND_DONE,
  BILLINGS_GENERATE_PDF_DONE, BILLINGS_GENERATE_PDF_REQUEST,
} from "./constants";

export const billingsFindRequest = createAction(BILLINGS_FIND_REQUEST);
export const billingsFindDone = createAction(BILLINGS_FIND_DONE);

export const billingsTransactionsFindRequest = createAction(BILLINGS_TRANSACTION_FIND_REQUEST);
export const billingsTransactionsFindDone = createAction(BILLINGS_TRANSACTION_FIND_DONE);

export const billingsInvoicesFindRequest = createAction(BILLINGS_INVOICES_FIND_REQUEST);
export const billingsInvoicesFindDone = createAction(BILLINGS_INVOICES_FIND_DONE);

export const billingsGeneratePDFRequest = createAction(BILLINGS_GENERATE_PDF_REQUEST);
export const billingsGeneratePDFDone = createAction(BILLINGS_GENERATE_PDF_DONE);
