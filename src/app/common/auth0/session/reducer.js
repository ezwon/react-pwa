import { handleActions } from "redux-actions";
import { fromJS } from "immutable";

import { sessionSetDone } from "./actions";

export const initialState = fromJS({
  user: {},
  profile: {
    name:"",
    nickname:"",
    picture: "",
  },
  isValidToken: false,
});

export const session = handleActions(
  {
    [sessionSetDone]: (state = initialState, action) => {
      return state
        .setIn(["user"], fromJS(action.payload.user))
        .setIn(["profile"], fromJS(action.payload.profile))
        .setIn(["isValidToken"], fromJS(action.payload.isValidToken));
    },
  },
  initialState,
);
