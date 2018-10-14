// @flow
import { combineReducers } from 'redux';
import * as actions from '../actions';
import sealStatus from '../seal-status/reducers';
import server, { type ServerState } from '../server/server-reducers';
import login, { type LoginState } from '../user/login/reducers';
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
