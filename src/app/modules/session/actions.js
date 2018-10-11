import {createAction} from "redux-actions";
import {SESSION_SET_REQUEST, SESSION_SET_DONE, SESSION_LOGOUT_REQUEST} from "./constants";

export const sessionSetRequest = createAction(SESSION_SET_REQUEST);
export const sessionSetDone = createAction(SESSION_SET_DONE);
export const sessionLogoutRequest = createAction(SESSION_LOGOUT_REQUEST);
