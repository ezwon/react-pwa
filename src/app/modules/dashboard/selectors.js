import { createSelector } from "reselect";

const selectDashboard = createSelector(
  state => state.dashboard,
  dashboard => dashboard.getIn(["data"]).toJS()
);


export { selectDashboard };
