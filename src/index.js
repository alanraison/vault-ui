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

import Page from './view/core/page';
import app from './state/core/reducers';
import sagas from './state/core/sagas';
import actions from './actions';

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();
const routesMap = {
  [actions.ERROR]: '/error',
  [actions.CLEAR_ERROR]: '/',
  [actions.INITIALISE]: '/loading',
  [actions.sealStatus.UNSEAL_KEY_REQUIRED]: '/unseal',
  [actions.login.START_CHOOSE_LOGIN_METHOD]: '/login',
  [actions.login.SELECT_LOGIN_METHOD]: '/login/:method',
  [actions.login.LOGIN_SUCCESS]: '/workspace',
};
const { reducer, middleware: routingMiddleware, enhancer } = connectRoutes(history, routesMap, { location: 'router' });

const middlewares = applyMiddleware(sagaMiddleware, routingMiddleware, logger);
const store = createStore(
  combineReducers({ router: reducer, app }),
  compose(enhancer, middlewares));

sagaMiddleware.run(sagas);

store.dispatch(actions.initialise());

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root'));
