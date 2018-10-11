import {call, put, takeEvery} from "redux-saga/effects";

import {
  PAYMENT_METHODS_GET_LIST,
  PAYMENT_METHODS_CREATE_NEW,
  PAYMENT_METHODS_DELETE_CARD,
  PAYMENT_METHODS_SET_DEFAULT,
  PAYMENT_METHODS_PRODUCT_CREATE_NEW_CARD,
  PAYMENT_METHODS_PRODUCT_REPLACE_CARD,
  PAYMENT_METHODS_PRODUCT_DELETE_CARD,
} from "./constants";

import {
  paymentGetListDone,
  paymentCreateNewDone,
  paymentDeleteCardDone,
} from "./actions";

import {create, find, patch, remove} from "../api";

const serviceName = {
  getCards: "client/credit-cards",
  addCard: "client/credit-card-add",
  setDefault: "client/credit-card-default",
  removeCard: "client/credit-card-remove",
  productCard: "products/credit-card",
};


function* paymentGetList({payload}) {
  const result = yield call(find, serviceName.getCards);
  if (result && !result.errors) {
    yield put(paymentGetListDone(result));
    if (payload.onSuccess && typeof payload.onSuccess === "function") {
      payload.onSuccess(result);
    }
  }
}

function* paymentCreateNew({payload}) {
  const result = yield call(create, serviceName.addCard, {
    data: payload.data,
  });
  if (result && !result.errors) {
    yield put(paymentCreateNewDone(result));
    if (payload.onSuccess && typeof payload.onSuccess === "function") {
      payload.onSuccess(result);
    }
  } else {
    if (payload.onError && typeof payload.onError === "function") {
      payload.onError(result.errors);
    }
  }
}

function* paymentDeleteCard({payload}) {
  const result = yield call(create, serviceName.removeCard, {
    data: payload.data,
  });
  if (result && !result.errors) {
    yield put(paymentDeleteCardDone(result));
    if (payload.onSuccess && typeof payload.onSuccess === "function") {
      payload.onSuccess(result);
    }
  }
}

function* paymentSetDefault({payload}) {
  const result = yield call(create, serviceName.setDefault, {
    data: payload.data,
  });
  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function") {
      payload.onSuccess(result);
    }
  }
}

function* paymentProductCreateNewCard({payload}) {
  const result = yield call(create, `${serviceName.productCard}/${payload.product_id}`, {
    data: payload.data,
  });
  if (result && !result.errors) {
    yield put(paymentGetListDone(result));
    if (payload.onSuccess && typeof payload.onSuccess === "function") {
      payload.onSuccess(result);
    }
  } else {
    if (payload.onError && typeof payload.onError === "function") {
      payload.onError(result.errors);
    }
  }
}

function* paymentProductReplaceCard({payload}) {
  const result = yield call(patch, serviceName.productCard, {
    id: payload.product_id,
    data: payload.data,
  });
  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function") {
      payload.onSuccess(result);
    }
  } else {
    if (payload.onError && typeof payload.onError === "function") {
      payload.onError(result.errors);
    }
  }
}

function* paymentProductDeleteCard({payload}) {
  const result = yield call(remove, serviceName.productCard, {
    id: payload.product_id,
  });
  if (result && !result.errors) {
    if (payload.onSuccess && typeof payload.onSuccess === "function") {
      payload.onSuccess(result);
    }
  } else {
    if (payload.onError && typeof payload.onError === "function") {
      payload.onError(result.errors);
    }
  }
}

export function* profileSaga() {
  yield takeEvery(PAYMENT_METHODS_GET_LIST, paymentGetList);
  yield takeEvery(PAYMENT_METHODS_CREATE_NEW, paymentCreateNew);
  yield takeEvery(PAYMENT_METHODS_DELETE_CARD, paymentDeleteCard);
  yield takeEvery(PAYMENT_METHODS_SET_DEFAULT, paymentSetDefault);

  yield takeEvery(PAYMENT_METHODS_PRODUCT_CREATE_NEW_CARD, paymentProductCreateNewCard);
  yield takeEvery(PAYMENT_METHODS_PRODUCT_REPLACE_CARD, paymentProductReplaceCard);
  yield takeEvery(PAYMENT_METHODS_PRODUCT_DELETE_CARD, paymentProductDeleteCard);
}
