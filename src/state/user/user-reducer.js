// @flow
import { combineReducers } from 'redux';
import * as actions from '../actions';
import login from './login/reducers';

export type UserState = {
  token: string,
};

const user = (
  state: string = '',
  action: actions.Action,
) => {
  switch (action.type) {
    case actions.login.LOGIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  login,
});
