import { handleActions } from "redux-actions";
import { fromJS } from "immutable";

import {
  productsListDone,
  productsRequestDone,
} from "./actions";

const initialState = fromJS({
  productsList: [],
  productsTable: {
    total: 0,
    limit: 0,
    skip: 0,
    data: [],
  },
});

export const products = handleActions(
  {
    [productsListDone]: (state = initialState, action) => {
      return state.setIn(["productsList"], fromJS(action.payload));
    },
    [productsRequestDone]: (state = initialState, action) => {
      return state.setIn(["productsTable"], fromJS(action.payload));
    },
  },
  initialState,
);
