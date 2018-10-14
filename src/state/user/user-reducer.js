// @flow
import * as actions from '../actions';

export type UserState = {
  token: string,
};

export default (
  state: string = '',
  action: actions.Action,
) => {
  switch (action.type) {
    case actions.login.LOGIN_SUCCESS:
      return (actions).payload;
    default:
      return state;
  }
};
