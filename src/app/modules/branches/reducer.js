import { handleAction } from "redux-actions";

import { branchesListDone } from "./actions";

export const branchesList = handleAction(branchesListDone, {
  next(state, { payload }) {
    return payload;
  },
}, []);
