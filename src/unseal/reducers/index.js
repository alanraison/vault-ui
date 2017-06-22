import * as actions from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case actions.GET_UNSEAL_STATUS_COMPLETE:
      return action.data;
    default:
      return state;
  }
}