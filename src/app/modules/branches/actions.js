import { createAction } from "redux-actions";
import { BRANCHES_LIST_DONE, BRANCHES_LIST_REQUEST } from "./constants";

//<editor-fold desc="Remove">
// TODO Remove please use
// GET
export const GET_ALL_ORGS_REQUEST = "GET_ALL_ORGS_REQUEST";
export const GET_ALL_ORGS_DONE = "GET_ALL_ORGS_DONE";

// GET
export const getAllOrgsRequest = createAction(GET_ALL_ORGS_REQUEST);
export const getAllOrgsDone = createAction(GET_ALL_ORGS_DONE);
//</editor-fold>


export const branchesListRequest = createAction(BRANCHES_LIST_REQUEST);
export const branchesListDone = createAction(BRANCHES_LIST_DONE);
