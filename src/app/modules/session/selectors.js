import { createSelector } from "reselect";

const makeSelectUserId = createSelector(
  state => state.session,
  session => session.getIn(["user", "auth0", "customer_id"], ""),
);

const makeSelectUser = createSelector(
  state => state.session,
  session => session.getIn(["user"]).toJS()
);

const selectSessionProfile = createSelector(
  state => state.session,
  session => session.getIn(["profile"]).toJS()
);

const selectIsValidToken = createSelector(
  state => state.session,
  session => session.getIn(["isValidToken"])
);

const makeSelectSession = createSelector(
  state => state.session,
  session => session.toJS()
);

export {
  makeSelectUser,
  selectSessionProfile,
  selectIsValidToken,
  makeSelectUserId,
  makeSelectSession,
};
