import { handleActions } from "redux-actions";

import { shopProductsFindDone, shopProductsSetFiltered } from "./actions";
import { fromJS } from "immutable";

const initialState = fromJS({
  products: [],
  filteredProducts: [],
});

export const shop = handleActions(
  {
    [shopProductsFindDone]: (state = initialState, action) => {
      return state.setIn(["products"], fromJS(action.payload));
    },
    [shopProductsSetFiltered]: (state = initialState, action) => {
      return state.setIn(["filteredProducts"], fromJS(action.payload));
    },
  },
  initialState
);
