import {
  combineReducers,
} from 'redux';
import * as actions from '../actions';
import sealStatus from '../seal/reducers';

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

export default combineReducers({
  sealStatus,
  error,
});