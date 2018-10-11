import { createSelector } from "reselect";

const cardList = createSelector(
  state => state.paymentMethods,
  paymentMethods => paymentMethods.getIn(["cards"]).toJS()
);

export { cardList };
