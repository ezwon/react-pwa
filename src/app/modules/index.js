import {fork, all} from "redux-saga/effects";

import {isLoading, message, isSaving} from "@modules/common/reducer";
import { session } from "@modules/session/reducer";
import { shop } from "@modules/shop/reducer";
import { cart } from "@modules/cart/reducer";
import { dashboard } from "@modules/dashboard/reducer";
import { billings } from "@modules/billings/reducer";
import { customerProducts } from "@modules/customer-products/reducer";
import { customersTable, customers } from "@modules/customers/reducer";
import { discountsTable } from "@modules/discounts/reducer";
import { profile } from "@modules/profile/reducer";
import { paymentMethods } from "@modules/payment-methods/reducer";
import { branchesList } from "@modules/branches/reducer";
import { events } from "@modules/events/reducer";
import { products } from "@modules/products/reducer";


import {isLoadingSaga, setMessageSaga, isSavingSaga} from "@modules/common/sagas";
import * as sessionSagas from "@modules/session/sagas";
import * as shopSagas from "@modules/shop/sagas";
import * as cartSagas from "@modules/cart/sagas";
import * as dashboardSagas from "@modules/dashboard/sagas";
import * as customersSagas from "@modules/customers/sagas";
import * as discountsSagas from "@modules/discounts/sagas";
import * as productSagas from "@modules/products/sagas";
import * as branchSaga from "@modules/branches/sagas";
import * as eventSaga from "@modules/events/sagas";
import * as billingsSaga from "@modules/billings/sagas";
import * as customerProductSagas from "@modules/customer-products/sagas";
import * as profileSaga from "@modules/profile/sagas";
import * as paymentMethodSaga from "@modules/payment-methods/sagas";

// for Auth0



export const rootReducer = {
  session,
  shop,
  cart,
  isLoading,
  isSaving,
  message,
  customersTable,
  discountsTable,
  dashboard,
  customers,
  billings,
  customerProducts,
  profile,
  paymentMethods,
  branchesList,
  events,
  products,
};

export function* rootSaga() {
  yield all(
    [
      ...Object.values(sessionSagas),
      ...Object.values(cartSagas),
      ...Object.values(shopSagas),
      ...Object.values(isSavingSaga),
      ...Object.values(setMessageSaga),
      ...Object.values(dashboardSagas),
      ...Object.values(customersSagas),
      ...Object.values(discountsSagas),
      ...Object.values(productSagas),
      ...Object.values(branchSaga),
      ...Object.values(eventSaga),
      ...Object.values(billingsSaga),
      ...Object.values(customerProductSagas),
      ...Object.values(profileSaga),
      ...Object.values(paymentMethodSaga),
    ].map(fork)
  );
}
