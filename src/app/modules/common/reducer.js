import {handleAction} from "redux-actions";

import {isLoading as isLoadingAction, setMessage, isSaving as isSavingACtion} from "./actions";

export const isLoading = handleAction(isLoadingAction, {
  next(state, {payload}) {
    return payload;
  },
}, false);

export const isSaving = handleAction(isSavingACtion, {
  next(state, {payload}) {
    return payload;
  },
}, false);

export const message = handleAction(setMessage, {
  next(state, {payload}) {
    return payload;
  },
}, {message: "", messageType: ""});

