import jwt from "jsonwebtoken";
import {put, takeEvery} from "redux-saga/effects";

import {SESSION_SET_REQUEST, SESSION_LOGOUT_REQUEST} from "./constants";
import {sessionSetDone} from "./actions";

import {get} from "@modules/api";

import {branchesListDone} from "@modules/branches/actions";
import {eventsListDone} from "@modules/events/actions";

import {initialState as sessionInitialState} from "./reducer";

const localStorage = require("localStorage");
const serviceName = "user/validate";

function clearTokens() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("id_token");
}

export function* sessionSaga() {
  yield takeEvery(SESSION_SET_REQUEST, sessionSetRequest);
  yield takeEvery(SESSION_LOGOUT_REQUEST, sessionLogoutRequest);
}

function* getUserDetails() {
  return yield get(serviceName, {id: "accounts"});
}

function* sessionSetRequest({payload}) {
  let session = sessionInitialState.toJS();
  let isValidToken = false;
  let user = {};

  session.isValidToken = false;

  if (payload && payload.authResult) {
    // authenticated via login, sets tokens
    const {authResult} = payload;
    const {accessToken, idToken, idTokenPayload: profile} = authResult;

    // clears and assign new tokens
    clearTokens();

    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("id_token", idToken);

    user = yield getUserDetails();
    // TODO: add handler when invoking getUserDetails while service is not available. - ezwon / harold
    if (user) {
      isValidToken = true;
      session = {user, profile, isValidToken};

      if (payload.callback && typeof payload.callback === "function")
        payload.callback(user);

    }
  } else {
    // checks tokens on localStorage
    const idToken = localStorage.getItem("id_token");
    try {
      let profile = jwt.decode(idToken);

      if (profile && profile !== null) {
        user = yield getUserDetails();

        if (user && !user.errors) {
          isValidToken = true;
          session = {user, profile, isValidToken};
        }

        if (new Date(new Date().getTime()) > new Date(profile.exp * 1000)) {
          clearTokens();
        }

      } else {
        // if idToken is not a valid jwt
        clearTokens();
      }
    } catch (err) {
      // throws an error when decoding invalid token
      clearTokens();
    }
  }

  if (user && user.is_admin) {
    if (user.branches) {
      yield put(branchesListDone(user.branches));
      delete user.branches;
    }
    if (user.events) {
      yield put(eventsListDone(user.events));
      delete user.events;
    }
  }

  yield put(sessionSetDone(session));
}

function* sessionLogoutRequest() {
  clearTokens();
  const session = sessionInitialState.toJS();
  session.isValidToken = false;
  yield put(sessionSetDone(session));

  // if (payload && payload.redirectUrl) {
  //   yield put(push(payload.redirectUrl));
  // }

}

