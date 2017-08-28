import * as actions from '../../actions/unseal';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.EDIT_UNSEAL_KEY:
      return action.payload.key;
    default:
      return state;
  }
};
