import {call, put, takeEvery} from "redux-saga/effects";

import {
  CART_REMOVE_ITEM_REQUEST,
  CART_GET_REQUEST,
  CART_ADD_ITEM_REQUEST,
  CART_UPDATE_ITEMS,
  CART_GOTO_ITEMS,
  CART_GOTO_ACCOUNT_DETAILS,
  CART_GOTO_BILLING_DETAILS,
  CART_GOTO_REVIEW_ORDER,
  CART_PURCHASE_REQUEST,
  CART_PAY_INVOICE_REQUEST,
  CART_CHECKS_EXISTING_EMAIL,
  CART_CONFIRM_ACCOUNT_DETAILS,
  CART_CONFIRM_BILLING_DETAILS,
  CART_STEPS,
  CART_APPLY_DISCOUNT,
  CART_UPDATE_INVOICE_DETAILS_REQUEST,
  CART_UPDATE_ACCOUNT_DETAILS_CHECKING,
} from "./constants";

import {
  cartUpdateItemsDone,
  cartConfirmAccountDetailsDone,
  cartConfirmBillingDetailsDone,
  cartGetDone,
  cartUpdateStep,
  cartUpdateStepDetails,
  cartApplyDiscountDone,
  cartUpdateInvoiceDetailsDone,
  cartUpdateAccountDetailsCheckingDone,
} from "./actions";

import {get, create} from "../api";

const localStorage = require("localStorage");

const serviceName = {
  purchase: "transactions",
  cart: "cart",
  discount: "discounts",
  clientInvoices: "client/invoices",
  invoices: "invoices",
};

export function* cartSaga() {
  yield takeEvery(CART_GET_REQUEST, cartGetRequest);
  yield takeEvery(CART_REMOVE_ITEM_REQUEST, cartRemoveItemRequest);
  yield takeEvery(CART_ADD_ITEM_REQUEST, cartAddItemRequest);

  yield takeEvery(CART_UPDATE_ACCOUNT_DETAILS_CHECKING, cartUpdateAccountDetailsChecking);

  yield takeEvery(CART_UPDATE_ITEMS, cartUpdateItems);
  yield takeEvery(CART_CONFIRM_ACCOUNT_DETAILS, cartConfirmAccountDetails);
  yield takeEvery(CART_CONFIRM_BILLING_DETAILS, cartConfirmBillingDetails);

  yield takeEvery(CART_UPDATE_INVOICE_DETAILS_REQUEST, cartUpdateInvoiceDetailsRequest);

  yield takeEvery(CART_GOTO_ITEMS, cartGoToItems);
  yield takeEvery(CART_GOTO_ACCOUNT_DETAILS, cartGoToAccountDetails);
  yield takeEvery(CART_GOTO_BILLING_DETAILS, cartGoToBillingDetails);

  yield takeEvery(CART_GOTO_REVIEW_ORDER, cartGoToReviewOrder);

  yield takeEvery(CART_PURCHASE_REQUEST, cartPurchaseRequest);
  yield takeEvery(CART_PAY_INVOICE_REQUEST, cartPayInvoiceRequest);

  yield takeEvery(CART_CHECKS_EXISTING_EMAIL, cartCheckExistingEmail);

  yield takeEvery(CART_APPLY_DISCOUNT, cartApplyDiscount);
}

function* cartGetRequest({payload}) {
  const items = localStorage.getItem("cart_items");
  let cartItems;

  if (payload.isLoggedIn) {
    //TODO: check Cart Service for Cart Items
    try {
      cartItems = items !== null ? JSON.parse(localStorage.getItem("cart_items")) : {};
    } catch (e) {
      cartItems = {};
    }

    if (payload.invoiceId) {
      cartItems = {};
      const invoiceData = yield call(get, serviceName.invoices, {id: payload.invoiceId}, false);

      if (!invoiceData.error && (invoiceData.status && invoiceData.status !== "Paid")) {
        cartItems["branch_id"] = invoiceData.branch_id;
        cartItems["details"] = invoiceData;
        cartItems["isValidInvoice"] = true;
      }
    }
  } else {
    try {
      cartItems = items !== null ? JSON.parse(localStorage.getItem("cart_items")) : {};
    } catch (e) {
      cartItems = {};
    }
  }

  localStorage.setItem("cart_items", JSON.stringify(cartItems));
  yield put(cartGetDone(cartItems));
}

function* cartRemoveItemRequest() {
  localStorage.setItem("cart_items", JSON.stringify({}));
  yield put(cartGetDone([]));
}

function* cartAddItemRequest({payload}) {
  if (typeof payload.isLoggedIn !== "undefined") {
    const result = yield call(create, serviceName, payload);
    if (result && !result.errors) {
      if (payload.onSuccess && typeof payload.onSuccess === "function")
        payload.onSuccess(result);
    }
  } else {
    let cartItems = JSON.parse(localStorage.getItem("cart_items"));
    cartItems.push(payload.product);
    localStorage.setItem("cart_items", JSON.stringify(cartItems));
    yield put(cartGetDone(cartItems));
  }
}

function* cartUpdateItems({payload}) {
  //TODO: Optional validation of products or checking of availability / reservation etc.

  // Update local storage or cart service if available
  localStorage.setItem("cart_items", JSON.stringify(payload.cartItems));
  yield put(
    cartUpdateItemsDone({
      cartItems: payload.cartItems,
    }),
  );

}

function* cartConfirmAccountDetails({payload}) {
  yield put(
    cartConfirmAccountDetailsDone({
      currentStep: CART_STEPS.cartItems,
      metadata: payload.metadata,
    }),
  );
}

function* cartUpdateAccountDetailsChecking({payload}) {
  yield put(
    cartUpdateAccountDetailsCheckingDone({
      isExistingCustomer: payload.isExistingCustomer,
      isEmailChecked: payload.isEmailChecked,
      isCheckingEmail: payload.isCheckingEmail,
    }),
  );
}

function* cartUpdateInvoiceDetailsRequest({payload}) {
  yield put(
    cartUpdateInvoiceDetailsDone({
      invoiceDetails: payload,
    }),
  );
}

function* cartConfirmBillingDetails({payload}) {
  yield put(
    cartConfirmBillingDetailsDone({
      currentStep: CART_STEPS.reviewOrder,
      zoho: payload.zoho || {},
      paymentType: payload.paymentType,
      paymentActiveTab: payload.paymentActiveTab,
    }),
  );
}

function* cartGoToItems() {
  yield put(cartUpdateStep({currentStep: CART_STEPS.cartItems}));
}

function* cartGoToAccountDetails() {
  yield put(cartUpdateStep({currentStep: CART_STEPS.accountDetails}));
}

function* cartGoToBillingDetails() {
  yield put(cartUpdateStep({currentStep: CART_STEPS.billingDetails}));
}

function* cartGoToReviewOrder() {
  yield put(cartUpdateStep({currentStep: CART_STEPS.reviewOrder}));
}

function* cartPurchaseRequest({payload}) {
  let result = {};
  yield put(
    cartUpdateStepDetails({
      status: "loading",
    }),
  );

  if (payload.invoiceId) {
    result = yield call(create, `${serviceName.clientInvoices}/${payload.invoiceId}/pay`, payload);
  } else {
    result = yield call(create, serviceName.purchase, payload);
  }

  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function")
      payload.onSuccess(result);
    yield put(
      cartUpdateStepDetails({
        status: "success",
      }),
    );

  } else if (result.errors) {
    yield put(
      cartUpdateStepDetails({
        status: "error",
        statusMessage: result.errors,
      }),
    );
  }
}

function* cartPayInvoiceRequest({payload}) {
  let result = {};
  yield put(
    cartUpdateStepDetails({
      status: "loading",
    }),
  );

  if (payload.invoiceId) {
    result = yield call(create, `${serviceName.clientInvoices}/${payload.invoiceId}/pay`, payload);
  } else {
    result = yield call(create, serviceName.purchase, payload);
  }

  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function")
      payload.onSuccess(result);

    yield put(
      cartUpdateStepDetails({
        status: "success",
      }),
    );

    localStorage.setItem("cart_items", {});
  } else if (result.errors) {
    yield put(
      cartUpdateStepDetails({
        status: "error",
        statusMessage: result.errors,
      }),
    );
  }
}

function* cartCheckExistingEmail({payload}) {
  const result = yield call(get, "/customers", {id: payload.email});
  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function")
      payload.onSuccess(result);
  }
}

function* cartApplyDiscount({payload}) {
  yield put(cartApplyDiscountDone({discount: {}}));
  const result = yield call(create, serviceName.discount, {
    data: payload.data,
  });
  yield put(cartApplyDiscountDone({discount: result}));
  if (payload.onSuccess && typeof payload.onSuccess === "function")
    payload.onSuccess(result);
}
