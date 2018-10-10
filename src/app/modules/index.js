import {fork, all} from "redux-saga/effects";

import {isLoading, message, isSaving} from "@modules/common/reducer";
import {isLoadingSaga, setMessageSaga, isSavingSaga} from "@modules/common/sagas";

export const rootReducer = {
  isLoading,
  isSaving,
  message,
};

export function* rootSaga() {
  yield all(
    [
      ...Object.values(isLoadingSaga),
      ...Object.values(isSavingSaga),
      ...Object.values(setMessageSaga),
    ].map(fork)
  );
}
