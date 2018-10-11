import ReduxClient from "@pawjs/redux/client";
import createSagaMiddleware from "redux-saga";
import {rootReducer, rootSaga} from "./app/modules";

const appInitialState = {};

export default class Client {

  constructor({addPlugin}) {

    const reduxClient = new ReduxClient({addPlugin});
    reduxClient.setReducers(rootReducer);

    this.itrackingMiddleware = ({ getState }) => {
      return (next) => (action) => {
        next(action);
        window && window.istrack && window.istrack("training.reducer", { action, getState });
      };
    };
    reduxClient.addMiddleware(this.itrackingMiddleware);

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
        return this.sagaMiddleware.run(rootSaga);
      });
  }
}
