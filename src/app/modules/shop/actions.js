import { createAction } from "redux-actions";
import {
  SHOP_ADD_TO_CART,
  SHOP_PRODUCTS_FIND_DONE,
  SHOP_PRODUCTS_FIND_REQUEST,
  SHOP_PRODUCTS_SET_FILTERED,
} from "./constants";

export const shopAddToCart = createAction(SHOP_ADD_TO_CART);

export const shopProductsFindRequest = createAction(SHOP_PRODUCTS_FIND_REQUEST);
export const shopProductsFindDone = createAction(SHOP_PRODUCTS_FIND_DONE);

export const shopProductsSetFiltered = createAction(SHOP_PRODUCTS_SET_FILTERED);

