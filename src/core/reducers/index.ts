import {
  combineReducers,
} from 'redux';
import * as actions from '../actions';
import sealStatus, { StoreState as SealStatusState } from '../../sealStatus/reducers';
import unseal, { StoreState as UnsealState } from '../../unseal/reducers';
import login, { StoreState as LoginState } from '../../login/reducers';

type ErrorState = {
  err: Error;
  source: string;
} | null;

const error = (state: ErrorState = null, action: actions.Action): ErrorState => {
  switch (action.type) {
    case actions.ERROR:
      return {
        err: action.err,
        source: action.source,
      };
    case actions.CLEAR_ERROR:
      return null;
    default:
      return state;
  }
}

type ConnectedState = boolean;

const connected = (state: ConnectedState = false, action: actions.Action): ConnectedState => {
  switch (action.type) {
    case actions.sealStatus.UNSEAL_STATUS_UPDATED:
      return true;
    default:
      return state;
  }
}

type AuthTokenState = string;

const authToken = (state: AuthTokenState = "", action: actions.Action): AuthTokenState => {
  switch (action.type) {
    case actions.login.LOGIN_SUCCESS:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  authToken,
  connected,
  error,
  login,
  sealStatus,
  unseal,
});

export interface StoreState {
  authToken: AuthTokenState;
  connected: ConnectedState;
  error: ErrorState;
  login: LoginState;
  sealStatus: SealStatusState;
  unseal: UnsealState; 
}