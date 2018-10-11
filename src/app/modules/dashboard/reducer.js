import { handleActions } from "redux-actions";
import { fromJS } from "immutable";

import {
  dashboardAction,
} from "./actions";

const initialState = fromJS({
  data: {},
});

export const dashboard = handleActions(
  {
    [dashboardAction]: (state = initialState, action) => {
      return state.setIn(["data"], fromJS(action.payload));
    }
  },
  initialState
);
