import { createAction } from "redux-actions";
import {
  PAYMENT_METHODS_GET_LIST,
  PAYMENT_METHODS_GET_LIST_DONE,
  PAYMENT_METHODS_CREATE_NEW,
  PAYMENT_METHODS_CREATE_NEW_DONE,
  PAYMENT_METHODS_DELETE_CARD,
  PAYMENT_METHODS_DELETE_CARD_DONE,
  PAYMENT_METHODS_SET_DEFAULT,
  PAYMENT_METHODS_SET_DEFAULT_DONE,

  PAYMENT_METHODS_PRODUCT_CREATE_NEW_CARD,
  PAYMENT_METHODS_PRODUCT_CREATE_NEW_CARD_DONE,
  PAYMENT_METHODS_PRODUCT_REPLACE_CARD,
  PAYMENT_METHODS_PRODUCT_REPLACE_CARD_DONE,
  PAYMENT_METHODS_PRODUCT_DELETE_CARD,
  PAYMENT_METHODS_PRODUCT_DELETE_CARD_DONE,
} from "./constants";

export const paymentGetList = createAction(PAYMENT_METHODS_GET_LIST);
export const paymentGetListDone = createAction(PAYMENT_METHODS_GET_LIST_DONE);

export const paymentCreateNew = createAction(PAYMENT_METHODS_CREATE_NEW);
export const paymentCreateNewDone = createAction(PAYMENT_METHODS_CREATE_NEW_DONE);

export const paymentDeleteCard = createAction(PAYMENT_METHODS_DELETE_CARD);
export const paymentDeleteCardDone = createAction(PAYMENT_METHODS_DELETE_CARD_DONE);

export const paymentSetDefault = createAction(PAYMENT_METHODS_SET_DEFAULT);
export const paymentSetDefaultDone = createAction(PAYMENT_METHODS_SET_DEFAULT_DONE);


export const paymentProductCreateNewCard = createAction(PAYMENT_METHODS_PRODUCT_CREATE_NEW_CARD);
export const paymentProductCreateNewCardDone = createAction(PAYMENT_METHODS_PRODUCT_CREATE_NEW_CARD_DONE);

export const paymentProductReplaceCard = createAction(PAYMENT_METHODS_PRODUCT_REPLACE_CARD);
export const paymentProductReplaceCardDone = createAction(PAYMENT_METHODS_PRODUCT_REPLACE_CARD_DONE);

export const paymentProductDeleteCard = createAction(PAYMENT_METHODS_PRODUCT_DELETE_CARD);
export const paymentProductDeleteCardDone = createAction(PAYMENT_METHODS_PRODUCT_DELETE_CARD_DONE);
