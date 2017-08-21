import * as actions from '../actions';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.EDIT_UNSEAL_KEY:
      return action.data;
    default:
      return state;
  }
};
