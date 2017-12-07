import { CHANGE_TOKEN, TokenAction } from './actions';

export type TokenState = string;
export default (state: TokenState = '', action: TokenAction): TokenState => {
  switch (action.type) {
    case CHANGE_TOKEN:
      return action.payload.token;
    default:
      return state;
  }
};
