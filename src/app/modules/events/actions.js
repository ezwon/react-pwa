import { createAction } from "redux-actions";
import {
  EVENTS_LIST_DONE,
  EVENTS_LIST_REQUEST,
} from "./constants";

//<editor-fold desc="Remove">
// TODO Remove, please use the eventsListRequest, eventsListDone
// GET
export const GET_ALL_EVENTS_BY_PRODUCT_REQUEST = "GET_ALL_EVENTS_BY_PRODUCT_REQUEST";
export const GET_ALL_EVENTS_BY_PRODUCT_DONE = "GET_ALL_EVENTS_BY_PRODUCT_DONE";

// GET
export const getAllEventsByProductRequest = createAction(
  GET_ALL_EVENTS_BY_PRODUCT_REQUEST,
);

export const getAllEventsByProductDone = createAction(
  GET_ALL_EVENTS_BY_PRODUCT_DONE,
);
//</editor-fold>


export const eventsListRequest = createAction(EVENTS_LIST_REQUEST);
export const eventsListDone = createAction(EVENTS_LIST_DONE);
