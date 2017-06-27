import {
  combineReducers,
} from 'redux';
import * as actions from '../actions';
import sealStatus from '../sealStatus/reducers';
import unseal from '../unseal/reducers';
import login from '../login/reducers';

const error = (state = null, action) => {
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

const connected = (state = false, action) => {
  switch (action.type) {
    case actions.sealStatus.UNSEAL_STATUS_UPDATED:
      return true;
    default:
      return state;
  }
}

export default combineReducers({
  sealStatus,
  unseal,
  error,
  login,
  connected,
});