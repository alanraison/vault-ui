import * as actions from '../../actions/login';
import methods from './methods';

export default (state = { method: null }, action) => {
  switch (action.type) {
    case actions.SELECT_LOGIN_METHOD:
      return {
        ...state,
        method: action.payload.method,
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.err,
      };
    default:
      if (state.method) {
        const currentMethodState = state[state.method];
        const newMethodState = methods[state.method](state[state.method], action);

        if (currentMethodState !== newMethodState) {
          return {
            ...state,
            [state.method]: newMethodState,
          };
        }
      }
      return state;
  }
};