/* eslint react/jsx-filename-extension: off */
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
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { connectRoutes } from 'redux-first-router';
import PlainApp from './core/components/app';
import app from './core/reducers';
import sagas from './core/sagas';
import * as actions from './core/actions';

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();
const routesMap = {
  [actions.ERROR]: '/error',
  [actions.CLEAR_ERROR]: '/',
  [actions.sealStatus.UNSEAL_KEY_REQUIRED]: '/unseal',
  [actions.login.LOGIN_START]: '/login',
  [actions.login.SELECT_LOGIN_METHOD]: '/login/:method',
};
const { reducer, middleware: routingMiddleware, enhancer } = connectRoutes(history, routesMap, { location: 'router' });

const middlewares = applyMiddleware(sagaMiddleware, routingMiddleware, logger);
const store = createStore(
  combineReducers({ router: reducer, app }),
  compose(enhancer, middlewares));

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <PlainApp />
  </Provider>,
  document.getElementById('root'));
