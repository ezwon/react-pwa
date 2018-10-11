import {createAction} from "redux-actions";
import {DISCOUNTS_FIND_REQUEST, DISCOUNTS_FIND_DONE, DISCOUNT_SAVE_REQUEST, DISCOUNT_REMOVE_REQUEST} from "./constants";

export const discountsFindRequest = createAction(DISCOUNTS_FIND_REQUEST);
export const discountsFindDone = createAction(DISCOUNTS_FIND_DONE);
export const discountSaveRequest = createAction(DISCOUNT_SAVE_REQUEST);
export const discountRemoveRequest = createAction(DISCOUNT_REMOVE_REQUEST);
