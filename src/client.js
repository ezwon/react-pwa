import ReduxClient from "@pawjs/redux/client";
import createSagaMiddleware from "redux-saga";
import {rootReducer, rootSaga} from "./app/modules";
// import {loadStyle} from "@pawjs/pawjs/src/utils/utils";

const appInitialState = {};
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
        return this.sagaMiddleware.run(rootSaga);
      });
  }
}
