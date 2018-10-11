import { handleActions } from "redux-actions";
import { fromJS } from "immutable";

import { paymentGetListDone } from "./actions";

const initialState = fromJS({
  cards: [],
  selected: {},
});

export const paymentMethods = handleActions(
  {
    [paymentGetListDone]: (state = initialState, action) => {
      return state.setIn(["cards"], fromJS(action.payload));
    }
  },
  initialState
);
