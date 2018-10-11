import { createSelector } from "reselect";

export const getBranchesForList = createSelector(
  (state) => state.branchesList,
  (branches) => branches.map(branch => ({
    label: branch.name,
    value: branch._id,
  }))
);
