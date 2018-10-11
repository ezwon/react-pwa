import { createAction } from "redux-actions";
import {
  CART_CHECKS_EXISTING_EMAIL,
  CART_UPDATE_ITEMS,
  CART_UPDATE_ITEMS_DONE,
  CART_GET_DONE,
  CART_GET_REQUEST,
  CART_REMOVE_ITEM_REQUEST,
  CART_ADD_ITEM_REQUEST,
  CART_SAVE_REQUEST,
  CART_UPDATE_STEP,
  CART_UPDATE_STEP_DETAILS,
  CART_GOTO_ITEMS,
  CART_GOTO_ACCOUNT_DETAILS,
  CART_GOTO_BILLING_DETAILS,
  CART_GOTO_REVIEW_ORDER,
  CART_PURCHASE_REQUEST,
  CART_PURCHASE_REQUEST_DONE,

  CART_PAY_INVOICE_REQUEST,
  CART_PAY_INVOICE_REQUEST_DONE,

  CART_CONFIRM_ACCOUNT_DETAILS,
  CART_CONFIRM_ACCOUNT_DETAILS_DONE,
  CART_CONFIRM_BILLING_DETAILS,
  CART_CONFIRM_BILLING_DETAILS_DONE,
  CART_SET_ADDONS,
  CART_APPLY_DISCOUNT,
  CART_APPLY_DISCOUNT_DONE,
  CART_UPDATE_INVOICE_DETAILS_REQUEST,
  CART_UPDATE_INVOICE_DETAILS_DONE,
  CART_UPDATE_ACCOUNT_DETAILS_CHECKING,
  CART_UPDATE_ACCOUNT_DETAILS_CHECKING_DONE,
} from "./constants";
// import { create } from "domain";

export const cartGetRequest = createAction(CART_GET_REQUEST);
export const cartGetDone = createAction(CART_GET_DONE);

export const cartChecksExistingEmail = createAction(CART_CHECKS_EXISTING_EMAIL);

export const cartGoToItems = createAction(CART_GOTO_ITEMS);
export const cartGoToAccountDetails = createAction(CART_GOTO_ACCOUNT_DETAILS);
export const cartGoToBillingDetails = createAction(CART_GOTO_BILLING_DETAILS);
export const cartGoToReviewOrder = createAction(CART_GOTO_REVIEW_ORDER);

export const cartUpdateItems = createAction(CART_UPDATE_ITEMS);
export const cartUpdateItemsDone = createAction(CART_UPDATE_ITEMS_DONE);

export const cartUpdateInvoiceDetailsRequest = createAction(CART_UPDATE_INVOICE_DETAILS_REQUEST);
export const cartUpdateInvoiceDetailsDone = createAction(CART_UPDATE_INVOICE_DETAILS_DONE);

export const cartUpdateAccountDetailsChecking = createAction(CART_UPDATE_ACCOUNT_DETAILS_CHECKING);
export const cartUpdateAccountDetailsCheckingDone = createAction(CART_UPDATE_ACCOUNT_DETAILS_CHECKING_DONE);

export const cartConfirmAccountDetails = createAction(
  CART_CONFIRM_ACCOUNT_DETAILS,
);
export const cartConfirmAccountDetailsDone = createAction(
  CART_CONFIRM_ACCOUNT_DETAILS_DONE,
);

export const cartConfirmBillingDetails = createAction(
  CART_CONFIRM_BILLING_DETAILS,
);
export const cartConfirmBillingDetailsDone = createAction(
  CART_CONFIRM_BILLING_DETAILS_DONE,
);

export const cartPurchaseRequest = createAction(CART_PURCHASE_REQUEST);
export const cartPurchaseRequestDone = createAction(CART_PURCHASE_REQUEST_DONE);

export const cartPayInvoiceRequest = createAction(CART_PAY_INVOICE_REQUEST);
export const cartPayInvoiceRequestDone = createAction(CART_PAY_INVOICE_REQUEST_DONE);

export const cartUpdateStep = createAction(CART_UPDATE_STEP);
export const cartUpdateStepDetails = createAction(CART_UPDATE_STEP_DETAILS);

export const cartRemoveItemRequest = createAction(CART_REMOVE_ITEM_REQUEST);
export const cartAddItemRequest = createAction(CART_ADD_ITEM_REQUEST);
export const cartSaveRequest = createAction(CART_SAVE_REQUEST);

export const cartSetAddOns = createAction(CART_SET_ADDONS);

export const cartApplyDiscount = createAction(CART_APPLY_DISCOUNT);
export const cartApplyDiscountDone = createAction(CART_APPLY_DISCOUNT_DONE);
