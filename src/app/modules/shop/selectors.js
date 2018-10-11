import { createSelector } from "reselect";

const makeProductsList = createSelector(
  state => state.shop,
  shop => shop.getIn(["products"],[]).toJS()
);

const filteredProducts = createSelector(
  state => state.shop,
  shop => shop.getIn(["filteredProducts"],[]).toJS()
);

export { makeProductsList, filteredProducts };
