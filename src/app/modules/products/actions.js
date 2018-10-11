import { createAction } from "redux-actions";
import {
  PRODUCTS_FIND_DONE,
  PRODUCTS_FIND_REQUEST,
  PRODUCTS_LIST_DONE,
  PRODUCTS_LIST_REQUEST,
  PRODUCT_REMOVE_REQUEST,
  PRODUCT_SAVE_REQUEST,
  PRODUCTS_GET_REQUEST,
  PRODUCTS_GET_DONE,
  PRODUCT_SAVE_CUSTOM_FIELDS_REQUEST,
} from "./constants";

export const productsFindRequest = createAction(PRODUCTS_FIND_REQUEST);
export const productsRequestDone = createAction(PRODUCTS_FIND_DONE);

export const productsGetRequest = createAction(PRODUCTS_GET_REQUEST);
export const productsGetDone = createAction(PRODUCTS_GET_DONE);

export const productsListRequest = createAction(PRODUCTS_LIST_REQUEST);
export const productsListDone = createAction(PRODUCTS_LIST_DONE);


export const productSaveRequest = createAction(PRODUCT_SAVE_REQUEST);
export const productSaveCustomFields = createAction(PRODUCT_SAVE_CUSTOM_FIELDS_REQUEST);
export const productRemoveRequest = createAction(PRODUCT_REMOVE_REQUEST);


