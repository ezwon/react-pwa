import ReduxServer from '@pawjs/redux/server';
import createSagaMiddleware from 'redux-saga';
import {rootReducer, rootSaga} from "./app/modules";

const appInitialState = {};

export default class Server {
  constructor({addPlugin}) {

    this.sagaMiddleware = createSagaMiddleware();
    const reduxServer = new ReduxServer({addPlugin});
    reduxServer.setReducers(rootReducer);
    reduxServer.addMiddleware(this.sagaMiddleware);
    addPlugin(reduxServer);
  }

  apply(serverHandler) {
    serverHandler
      .hooks
      .reduxInitialState
      .tapPromise("AppInitialState", async ({getInitialState, setInitialState}) => {
        const initialState = Object.assign({}, getInitialState(), appInitialState);
        setInitialState(initialState);
      });

    serverHandler
      .hooks
      .beforeAppRender
      .tapPromise("RunSagaMiddleware", async () => {
        return this.sagaMiddleware.run(rootSaga);
      });
  }
}
