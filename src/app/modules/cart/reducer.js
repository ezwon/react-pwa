import { handleActions } from "redux-actions";
import { fromJS } from "immutable";

import {
  cartGetDone,
  cartUpdateStep,
  cartUpdateStepDetails,
  cartUpdateItemsDone,
  cartConfirmAccountDetailsDone,
  cartConfirmBillingDetailsDone,
  cartSetAddOns,
  cartApplyDiscountDone,
  cartUpdateInvoiceDetailsDone,
  cartUpdateAccountDetailsCheckingDone,
} from "./actions";

const initialState = fromJS({
  steps: {
    current: 0,
    status: "default",
    statusMessage:"",
    statusDescription: "",
    isExistingCustomer: false,
    isEmailChecked: false,
    isCheckingEmail: false,
  },
  branch_id: "",
  cartItems: {},
  paymentType: "",
  paymentActiveTab: "",
  invoiceDetails: {
    name: "",
    address: "",
  },
  zoho: {},
  product: {},
  metadata: {},
  addOns: [],
  discount: {},
});

export const cart = handleActions(
  {
    [cartGetDone]: (state = initialState, action) => {
      return state.setIn(["cartItems"], fromJS(action.payload));
    },
    [cartUpdateInvoiceDetailsDone]: (state = initialState, action) => {
      return state.setIn(["invoiceDetails"], fromJS(action.payload.invoiceDetails));
    },
    [cartUpdateStep]: (state = initialState, action) => {
      return state.setIn(
        ["steps", "current"],
        fromJS(action.payload.currentStep),
      );
    },
    [cartUpdateAccountDetailsCheckingDone]: (state = initialState, action) => {
      return state
        .setIn(["steps", "isExistingCustomer"], fromJS(action.payload.isExistingCustomer))
        .setIn(["steps", "isEmailChecked"], fromJS(action.payload.isEmailChecked))
        .setIn(["steps", "isCheckingEmail"], fromJS(action.payload.isCheckingEmail));
    },
    [cartUpdateStepDetails]: (state = initialState, action) => {
      return state
        .setIn(["steps", "status"], fromJS(action.payload.status))
        .setIn(["steps", "statusMessage"], fromJS(action.payload.statusMessage));
    },
    [cartUpdateItemsDone]: (state = initialState, action) => {
      return state
        .setIn(["cartItems"], fromJS(action.payload.cartItems));
    },
    [cartConfirmAccountDetailsDone]: (state = initialState, action) => {
      return state
        .setIn(["steps", "current"], fromJS(action.payload.currentStep))
        .setIn(["metadata"], fromJS(action.payload.metadata));
    },
    [cartConfirmBillingDetailsDone]: (state = initialState, action) => {
      return state
        .setIn(["steps", "current"], fromJS(action.payload.currentStep))
        .setIn(["paymentType"], fromJS(action.payload.paymentType))
        .setIn(["paymentActiveTab"], fromJS(action.payload.paymentActiveTab))
        .setIn(["zoho"], fromJS(action.payload.zoho));
    },
    [cartSetAddOns]: (state = initialState, action) => {
      return state.setIn(["addOns"], fromJS(action.payload.addOns));
    },
    [cartApplyDiscountDone]: (state = initialState, action) => {
      return state.setIn(["discount"], fromJS(action.payload.discount));
    },
  },
  initialState,
);
