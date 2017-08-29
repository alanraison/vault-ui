import { CHANGE_TOKEN } from '../../../../actions/methods/token';

export default (state = '', action) => {
  switch (action.type) {
    case CHANGE_TOKEN:
      return action.payload.token;
    default:
      return state;
  }
};
