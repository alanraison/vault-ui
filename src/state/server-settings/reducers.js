import * as actions from './actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN_SETTINGS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
