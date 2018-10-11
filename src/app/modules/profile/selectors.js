import { createSelector } from "reselect";

const profileUserDetails = createSelector(
  state => state.profile,
  profile => profile.getIn(["data"]).toJS()
);

const profileOtherUserDetails = createSelector(
  state => state.profile,
  profile => profile.getIn(["otherData"]).toJS()
);

const profileUserImage = createSelector(
  state => state.profile,
  item => item.toJS().userAvatar
);

export { profileUserDetails, profileUserImage, profileOtherUserDetails };
