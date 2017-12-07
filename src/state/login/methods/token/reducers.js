// @flow
import * as actions from './actions';

export type TokenState = string;
export default (state: TokenState = '', action: actions.TokenAction): TokenState => {
  switch (action.type) {
    case actions.CHANGE_TOKEN:
      return action.payload.token;
    default:
      return state;
  }
};
