import { combineReducers } from 'redux';
import * as actions from '../actions';
import unseal from '../unseal/reducers';

const initialState = {
  sealed: null,
};

const serverState = (state = initialState, action) => {
  switch (action.type) {
    case actions.UNSEAL_STATUS_UPDATED:
      return action.data
    default:
      return state;
  }
}

export default combineReducers({
  serverState, 
  unseal,
});