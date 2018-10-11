import {call, put, takeEvery} from "redux-saga/effects";
import _ from "lodash";
import {SHOP_ADD_TO_CART, SHOP_PRODUCTS_FIND_REQUEST} from "./constants";
import {shopProductsFindDone, shopProductsSetFiltered} from "./actions";
import {find} from "../api";

const serviceName = {
  products: "products",
  cartService: "list/products",
};

const localStorage = require("localStorage");

export function* shop() {
  yield takeEvery(SHOP_ADD_TO_CART, shopAddToCart);
  yield takeEvery(SHOP_PRODUCTS_FIND_REQUEST, shopProductsFindRequest);
}

function* shopAddToCart({payload}) {
  const cartItems = {};

  cartItems["branch_id"] = payload.branch_id;
  cartItems[payload._id] = payload;
  cartItems[payload._id].total_price = payload.price * payload.quantity;

  _.map(cartItems, (cartItem) => {

    //Re-Map AddOn items
    if (cartItem.addons && cartItem.addons.length > 0) {
      const newAddOns = {};
      _.map(cartItem.addons, (addon) => {
        addon.total_price = addon.price * addon.quantity;
        newAddOns[addon._id] = addon;
      });

      cartItem.addons = newAddOns;
    }

    // Append Up-Sell products to Cart Items
    if (cartItem.up_sell && cartItem.up_sell.length > 0) {
      _.map(cartItem.up_sell, (upSellItem) => {
        cartItems[upSellItem._id] = upSellItem;
      });
    }
  });

  yield localStorage.setItem("cart_items", JSON.stringify(cartItems));
}

function* shopProductsFindRequest({payload}) {
  const result = yield call(find, serviceName.products, payload);
  if (result && !result.errors) {
    yield put(shopProductsFindDone(result));
    yield put(shopProductsSetFiltered(result));
    if (payload.onSuccess && typeof payload.onSuccess === "function") {
      payload.onSuccess(result);
    }
  }
}
