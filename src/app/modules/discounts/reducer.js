import {
  handleAction,
} from "redux-actions";

import { discountsFindDone } from "./actions";
import { list } from "../common/initialState" ;

export const discountsTable = handleAction(discountsFindDone, {
  next(state, { payload }) {
    return payload;
  },
}, list);
