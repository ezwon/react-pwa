import {app} from "./service";
import {call, put} from "redux-saga/effects";
import {
  isLoading,
  setMessage as setMessageValue,
  isSaving,
} from "./common/actions";

import {message} from "antd";

import {sessionSetDone} from "@common/auth0/session/actions";
import {initialState as sessionInitialState} from "@common/auth0/session/reducer";

import {enumMessageType} from "@common/enums";

import config from "@config";


export function* setIsLoading(value) {
  yield put(isLoading(value));
}

function* setIsSaving(value) {
  yield put(isSaving(value));
}

function* handleError(err) {

  if (config.SUPPRESS_ERROR.indexOf(err.message) === -1) {
    message.error(`API ERROR: ${err.message}`);
  }

  if (err.name === "NotAuthenticated" || err.message === "Invalid Token") {
    const session = sessionInitialState.toJS();
    session.isValidToken = false;
    yield put(sessionSetDone(session));
  }
}

function* setMessage(value) {
  yield put(setMessageValue(value));
}

export function* find(name, query, setLoading = true) {
  try {
    if (setLoading) yield call(setIsLoading, true);
    const result = yield app.service(name).find({query: {...query}});
    if (setLoading) yield call(setIsLoading, false);
    return result;
  } catch (err) {
    yield call(handleError, err);
    yield call(setMessage, {
      message: err.message,
      messageType: enumMessageType.error,
    });
    if (setLoading) yield call(setIsLoading, false);
    return {
      errors:
        err.errors && err.errors.message ? err.errors.message : err.message,
    };
  }
}

export function* get(name, {id}, setLoading = true) {
  try {
    if (setLoading) yield call(setIsLoading, true);
    const result = yield app.service(name).get(id);
    if (setLoading) yield call(setIsLoading, false);
    return result;
  } catch (err) {
    yield call(handleError, err);
    yield call(setMessage, {
      message: err.message,
      messageType: enumMessageType.error,
    });
    if (setLoading) yield call(setIsLoading, false);
    return {
      errors:
        err.errors && err.errors.message ? err.errors.message : err.message,
    };
  }
}

export function* create(name, {data}, setSaving = true) {
  try {
    if (setSaving) yield call(setIsSaving, true);
    const result = yield app.service(name).create(data);
    // console.log('result: ', result);
    if (setSaving) yield call(setIsSaving, false);

    return result;
  } catch (err) {
    yield call(handleError, err);
    yield call(setMessage, {
      message: err.message,
      messageType: enumMessageType.error,
    });
    if (setSaving) yield call(setIsSaving, false);
    return {
      errors:
        err.errors && err.errors.message ? err.errors.message : err.message,
    };
  }
}

export function* patch(name, {id, data, headers = {}}, setSaving = true) {
  try {
    if (setSaving) yield call(setIsSaving, true);
    const result = yield app.service(name).patch(id, data, {headers});
    // console.log('result: ', result);
    if (setSaving) yield call(setIsSaving, false);

    return result;
  } catch (err) {
    yield call(handleError, err);
    yield call(setMessage, {
      message: err.message,
      messageType: enumMessageType.error,
    });
    if (setSaving) yield call(setIsSaving, false);
    return {
      errors:
        err.errors && err.errors.message ? err.errors.message : err.message,
    };
  }
}

export function* remove(name, {id}, setSaving = true) {
  try {
    // console.log('id: ', id)
    if (setSaving) yield call(setIsSaving, true);
    const result = yield app.service(name).remove(id);
    // console.log('result: ', result);
    if (setSaving) yield call(setIsSaving, false);

    return result;
  } catch (err) {
    yield call(handleError, err);
    yield call(setMessage, {
      message: err.message,
      messageType: enumMessageType.error,
    });
    if (setSaving) yield call(setIsSaving, false);
    return {
      errors:
        err.errors && err.errors.message ? err.errors.message : err.message,
    };
  }
}
