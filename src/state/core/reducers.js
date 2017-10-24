import { combineReducers } from 'redux';
import * as actions from '../actions';
import sealStatus from '../seal-status/reducers';
import login from '../login/reducers';

const error = (state = null, action) => {
  switch (action.type) {
    case actions.ERROR:
      return {
        err: action.payload.err,
        source: action.payload.source,
      };
    case actions.CLEAR_ERROR:
      return null;
    default:
      return state;
  }
};

const connected = (state = false, action) => {
  switch (action.type) {
    case actions.HEALTH_CHECK_RESPONSE:
      return true;
    default:
      return state;
  }
};

const vault = (state = null, action) => {
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
  connected,
  error,
  login,
  sealStatus,
  vault,
});

