import { CHANGE_TOKEN } from '../actions';

export default (state = '', action) => {
  switch (action.type) {
    case CHANGE_TOKEN:
      return action.payload;
    default:
      return state;
  }
};
