import { handleActions} from "redux-actions";
import { fromJS } from "immutable";

import {
  customerProductsGetRequestDone,
  customerProductDetailGetRequestDone,
  customerTicketDetailGetRequestDone,
  customerProductUpdateCustomValuesRequestDone,
  customerProductChurnMessageRequestDone,

  customerProductDeactivateSubscriptionRequestDone,
  customerProductReactivateSubscriptionRequestDone,
  customerProductModifySubscriptionRequestDone,
} from "./actions";

const initialState = fromJS({
  products:[],
  details: {
    _id: "",
    branch_id:"",
    product_id: "",
    currency: "",
    status: "",
    total_amount: "",
    created_at: "",
    payment_cycle: "",
    product_details:{
      name: "",
    },
  },
  churnMessages:[]
});

export const customerProducts = handleActions({
  [customerProductsGetRequestDone]: (state = initialState, {payload}) => {
    return state.setIn(["products"], fromJS(payload));
  },
  [customerTicketDetailGetRequestDone]: (state = initialState, {payload}) => {
    return state.setIn(["products"], fromJS(payload));
  },
  [customerProductDetailGetRequestDone]: (state = initialState, {payload}) => {
    return state.setIn(["details"], fromJS(payload));
  },
  [customerProductUpdateCustomValuesRequestDone]: (state = initialState, {payload}) => {
    return state.setIn(["tickets"], fromJS(payload));
  },
  [customerProductChurnMessageRequestDone]: (state = initialState, {payload}) => {
    return state.setIn(["churnMessages"], fromJS(payload.churn_messages));
  },
  [customerProductDeactivateSubscriptionRequestDone]: (state = initialState, {payload}) => {
    return state.setIn(["details"], fromJS(payload));
  },
  [customerProductReactivateSubscriptionRequestDone]: (state = initialState, {payload}) => {
    return state.setIn(["details"], fromJS(payload));
  },
  [customerProductModifySubscriptionRequestDone]: (state = initialState, {payload}) => {
    return state.setIn(["details"], fromJS(payload));
  },
}, initialState);
