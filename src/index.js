import React from 'react';
import ReactDOM from 'react-dom';
import { 
  applyMiddleware,
  createStore, 
  combineReducers,
  compose,
} from 'redux';
import { 
  Provider, 
} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { connectRoutes } from 'redux-first-router';
import App from './app';
import app from './reducers';
import sagas from './unseal/sagas';

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();
const routesMap = {
  UNSEAL: '/unseal',
};
//const { reducer, routingMiddleware, enhancer } = connectRoutes(history, routesMap);

const middlewares = applyMiddleware(sagaMiddleware);
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
