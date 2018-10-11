import {createSelector} from "reselect";

const makeSelectChurnMessages = createSelector(
  state => state.customerProducts,
  customerProducts => customerProducts.getIn(["churnMessages"]).toJS()
);

const makeSelectProductDetails = createSelector(
  state => state.customerProducts,
  customerProducts => customerProducts.getIn(["details"]).toJS()
);

const makeSelectProducts = createSelector(
  state => state.customerProducts,
  customerProducts => customerProducts.getIn(["products"]).toJS()
);
export {makeSelectChurnMessages, makeSelectProductDetails, makeSelectProducts};
