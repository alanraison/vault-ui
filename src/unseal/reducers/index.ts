import * as actions from '../actions';

export type StoreState = string;
const initialState: StoreState = "";

export default (state: StoreState = initialState, action: actions.UnsealAction) => {
  switch (action.type) {
    case actions.EDIT_UNSEAL_KEY:
      return action.data;
    default:
      return state;
  }
}