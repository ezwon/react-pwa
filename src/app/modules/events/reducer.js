import { handleActions } from "redux-actions";
import { fromJS } from "immutable";

import {
  eventsListDone,
} from "./actions";

const initialState = fromJS({
  eventsList: [],
});

export const events = handleActions(
  {
    [eventsListDone]: (state = initialState, action) => {
      return state.setIn(["eventsList"], fromJS(action.payload));
    },
  },
  initialState,
);
