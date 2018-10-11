import { handleActions } from "redux-actions";
import { fromJS } from "immutable";

import {
  profileGetUserDetailsDone,
  profileGetOtherUserDetailsDone,
  profileUpdateUserImage,
} from "./actions";

const initialState = fromJS({
  data: {},
  otherData: {
    app_metadata:{
      picture: "",
    },
  },
  userAvatar: "",
});

export const profile = handleActions(
  {
    [profileGetUserDetailsDone]: (state = initialState, action) => {
      return state.setIn(["data"], fromJS(action.payload));
    },
    [profileUpdateUserImage]: (state = initialState, action) => {
      return state.setIn(["userAvatar"], fromJS(action.payload));
    },
    [profileGetOtherUserDetailsDone]: (state = initialState, action) => {
      return state.setIn(["otherData"], fromJS(action.payload));
    },
  },
  initialState
);
