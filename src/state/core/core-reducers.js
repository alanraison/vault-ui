// @flow
import { combineReducers } from 'redux';
import * as actions from '../actions';
import sealStatus, { type SealStatusState } from '../seal-status/reducers';
import login, { type LoginState } from '../login/reducers';
import { UnauthenticatedVault } from '../../vault-api';
import { Server } from 'tls';

export type ErrorState = {
  err?: Error,
  source?: string,
};
const error = (
  state: ErrorState = {},
  action: actions.ErrorAction | actions.ClearErrorAction,
): ErrorState => {
  switch (action.type) {
    case actions.ERROR:
      return {
        err: action.payload.err,
        source: action.payload.source,
      };
    case actions.CLEAR_ERROR:
      return {};
    default:
      return state;
  }
};

export type ConnectedState = boolean;
const connected = (
  state: ConnectedState = false,
  action: actions.HealthCheckResponseAction,
): ConnectedState => {
  switch (action.type) {
    case actions.HEALTH_CHECK_RESPONSE:
      return true;
    default:
      return state;
  }
};

export type VaultState = UnauthenticatedVault | null;
const vault = (
  state: VaultState = null,
  action: actions.InitialiseAction | actions.login.LoginSuccessAction,
): VaultState => {
  switch (action.type) {
    case actions.INITIALISE:
    case actions.login.LOGIN_SUCCESS: {
      return action.payload.vault;
    }
    default:
      return state;
  }
};

export type ServerState = {
  connected: boolean,
  // sealStatus: SealStatusState,
  loading: boolean,
};
const initialServerState: ServerState = {
  connected: false,
  loading: false,
  // sealStatus: sealStatus(),
};
const server = (
  state: ServerState = initialServerState,
  action: actions.Action,
): ServerState => {
  switch (action.type) {
    case actions.HEALTH_CHECK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.HEALTH_CHECK_RESPONSE:
      return {
        ...state,
        loading: false,
        connected: true,
      };
    default:
      return state;
  }
};

export default combineReducers({
  server,
  connected,
  error,
  login,
  sealStatus,
  vault,
});

export type AppState = {
  server: ServerState,
  error: ErrorState,
  login: LoginState,
  vault: VaultState,
};
