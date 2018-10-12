// @flow
import { combineReducers } from 'redux';
import * as actions from '../actions';

const connected = (
  state = false,
  action: actions.Action,
) => {
  switch (action.type) {
    case actions.HEALTH_CHECK_RESPONSE:
      return action.payload.ok;
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

export default combineReducers({
  connected,
  loading,
});
