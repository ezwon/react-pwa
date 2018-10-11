import {fork, all} from "redux-saga/effects";

import {isLoading, message, isSaving} from "@modules/common/reducer";
import { shop } from "@modules/shop/reducer";
import { cart } from "@modules/cart/reducer";

import {isLoadingSaga, setMessageSaga, isSavingSaga} from "@modules/common/sagas";
import * as shopSagas from "@modules/shop/sagas";
import * as cartSagas from "@modules/cart/sagas";

// for Auth0
import { session } from "@common/auth0/session/reducer";
import { sessionSaga } from "@common/auth0/session/sagas";

export const rootReducer = {

  session,
  shop,
  cart,
  isLoading,
  isSaving,
  message,
};

export function* rootSaga() {
  yield all(
    [
      sessionSaga,
      ...Object.values(cartSagas),
      ...Object.values(shopSagas),
      ...Object.values(isSavingSaga),
      ...Object.values(setMessageSaga),
    ].map(fork)
  );
}
