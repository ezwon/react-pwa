import {createAction} from "redux-actions";
import {IS_LOADING, IS_SAVING, SET_MESSAGE} from "./constants";

export const isLoading = createAction(IS_LOADING);
export const isSaving = createAction(IS_SAVING);
export const setMessage = createAction(SET_MESSAGE);
