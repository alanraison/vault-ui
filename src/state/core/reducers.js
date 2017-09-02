import {
  combineReducers,
} from 'redux';
import actions from '../../actions';
import sealStatus from '../sealStatus/reducers';
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
    case actions.HEALTH_CHECK_OK:
      return true;
    default:
      return state;
  }
};

const authToken = (state = '', action) => {
  switch (action.type) {
    case actions.login.LOGIN_SUCCESS:
      return action.payload.auth;
    default:
      return state;
  }
};

const vault = (state = null, action) => {
  switch (action.type) {
    case actions.INITIALISE: {
      console.log(action);
      return action.payload.vault;
    }
    default:
      return state;
  }
};

export default combineReducers({
  authToken,
  connected,
  error,
  login,
  sealStatus,
  vault,
});

// selectors
export const getAppState = state => state.app;
export const getVault = state => getAppState(state).vault;
