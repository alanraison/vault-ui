import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { 
  applyMiddleware,
  createStore, 
  combineReducers,
  // compose,
} from 'redux';
import { 
  Provider, 
} from 'react-redux';
import * as createSagaMiddleware from 'redux-saga';
import * as logger from 'redux-logger';
// import createHistory from 'history/createBrowserHistory';
// import { connectRoutes } from 'redux-first-router';
import * as App from './core/components/app';
import * as app from './core/reducers';
import * as sagas from './core/sagas';

const sagaMiddleware = createSagaMiddleware();

// const history = createHistory();
// const routesMap = {
//   UNSEAL: '/unseal',
// };
//const { reducer, routingMiddleware, enhancer } = connectRoutes(history, routesMap);

const middlewares = applyMiddleware(sagaMiddleware, logger);
const store = createStore(
  combineReducers({app}),
  middlewares
);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
