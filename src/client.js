import ReduxClient from "@pawjs/redux/client";
import createSagaMiddleware from "redux-saga";
import {rootReducer, rootSaga} from "./app/modules";
import React, {Component} from "react";
import {loadStyle} from "@pawjs/pawjs/src/utils/utils";

const appInitialState = {};

// ... other imports

export default class Client {

  constructor({addPlugin}) {

    const reduxClient = new ReduxClient({addPlugin});
    reduxClient.setReducers(rootReducer);

    this.sagaMiddleware = createSagaMiddleware();
    reduxClient.addMiddleware(this.sagaMiddleware);
    addPlugin(reduxClient);
  }

  apply(clientHandler) {
    clientHandler
      .hooks
      .reduxInitialState
      .tapPromise("ReduxInitialState", async ({getInitialState, setInitialState}) => {
        const initialState = Object.assign({}, getInitialState(), appInitialState);
        setInitialState(initialState);
      });

    clientHandler
      .hooks
      .beforeRender
      .tapPromise("RunSagaMiddleware", async () => {

        loadStyle("https://fonts.googleapis.com/css?family=Lato:300,400").then((res) => {
          // callbackFunction
        }).catch(err => {
          // handle error loading JS situation
        });

        import("@common/styles/global-styles");

        return this.sagaMiddleware.run(rootSaga);
      });
  }
}
