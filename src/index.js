/* eslint react/jsx-filename-extension: off */
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { connectRoutes } from 'redux-first-router';

import Page from './view/layout/page';
import app from './state/core/reducers';
import sagas from './state/core/sagas';
import * as actions from './state/actions';
import { UnauthenticatedVault } from './vault-api';

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();
const routesMap = {
  [actions.HOME]: '/',
  [actions.login.LOGIN_SUCCESS]: '/',
  [actions.ERROR]: '/error',
  [actions.INITIALISE]: '/loading',
  [actions.sealStatus.UNSEAL_KEY_REQUIRED]: '/unseal',
  [actions.login.START_CHOOSE_LOGIN_METHOD]: '/login',
  [actions.login.SELECT_LOGIN_METHOD]: '/login/:method',
  [actions.serverSettings.SETTINGS]: '/settings',
};
const {
  reducer: location,
  middleware: routingMiddleware,
  enhancer,
} = connectRoutes(history, routesMap);

const middlewares = applyMiddleware(sagaMiddleware, routingMiddleware, logger);
const store = createStore(
  combineReducers({ location, app }),
  compose(enhancer, middlewares),
);

sagaMiddleware.run(sagas);

const vault = new UnauthenticatedVault('http://localhost:3000');
store.dispatch(actions.initialise(vault));

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <CssBaseline>
        <Page />
      </CssBaseline>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
