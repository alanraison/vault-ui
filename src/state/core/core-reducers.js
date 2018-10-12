// @flow
import { combineReducers } from 'redux';
import * as actions from '../actions';
import sealStatus from '../seal-status/reducers';
import login, { type LoginState } from '../login/reducers';
import { UnauthenticatedVault } from '../../vault-api';

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

const connected = (
  state = false,
  action: actions.Action,
) => {
  switch (action.type) {
    case actions.HEALTH_CHECK_RESPONSE:
      return true;
    default:
      return state;
  }
};

const loading = (
  state = 0,
  action: actions.Action,
) => {
  switch (action.type) {
    case actions.HEALTH_CHECK_REQUEST:
    case actions.sealStatus.UNSEAL_STATUS_REQUEST:
    case actions.login.LOGIN_START:
      return state + 1;
    case actions.HEALTH_CHECK_RESPONSE:
    case actions.sealStatus.UNSEAL_STATUS_RESPONSE:
    case actions.login.LOGIN_SUCCESS:
    case actions.login.LOGIN_ERROR:
      return state - 1;
    default:
      return state;
  }
};

export type ServerState = {
  connected: boolean,
  loading: number,
};

const server = combineReducers({
  connected,
  loading,
});

export default combineReducers({
  server,
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
