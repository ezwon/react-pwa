import { createSelector } from "reselect";

const makeSelectCartList = createSelector(
  state => state.cart,
  cart => cart.getIn(["cartItems"]).toJS(),
);

const makeSelectMetadata = createSelector(
  state => state.cart,
  cart => cart.getIn(["metadata"]).toJS(),
);

const makeSelectInvoiceDetails = createSelector(
  state => state.cart,
  cart => cart.getIn(["invoiceDetails"]).toJS(),
);

const makeSelectZoho = createSelector(
  state => state.cart,
  cart => cart.getIn(["zoho"]).toJS(),
);

const makeSelectPaymentMethod = createSelector(
  state => state.cart,
  cart => cart.getIn(["paymentType"]),
);

const makeSelectPaymentActiveTab = createSelector(
  state => state.cart,
  cart => cart.getIn(["paymentActiveTab"]),
);

const makeSelectSteps = createSelector(
  state => state.cart,
  cart => cart.getIn(["steps"]).toJS(),
);

const makeSelectAddOns = createSelector(
  state => state.cart,
  cart => cart.getIn(["addOns"]).toJS(),
);

const makeSelectDiscount = createSelector(
  state => state.cart,
  cart => cart.getIn(["discount"]).toJS(),
);


export {
  makeSelectCartList,
  makeSelectZoho,
  makeSelectPaymentActiveTab,
  makeSelectPaymentMethod,
  makeSelectInvoiceDetails,
  makeSelectMetadata,
  makeSelectSteps,
  makeSelectAddOns,
  makeSelectDiscount,
};
