import {fork, all} from "redux-saga/effects";

import {isLoading, message, isSaving} from "@modules/common/reducer";

import {isLoadingSaga, setMessageSaga, isSavingSaga} from "@modules/common/sagas";

// for Auth0
import { session } from "@common/auth0/session/reducer";
import { sessionSaga } from "@common/auth0/session/sagas";

export const rootReducer = {
  session,
  isLoading,
  isSaving,
  message,
};

export function* rootSaga() {
  yield all(
    [
      sessionSaga,
      ...Object.values(isLoadingSaga),
      ...Object.values(isSavingSaga),
      ...Object.values(setMessageSaga),
    ].map(fork)
  );
}
