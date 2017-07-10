import * as actions from '../actions';
import methods from '../methods/reducers';

export default (state = {method:null}, action) => {
  switch (action.type) {
    case actions.SELECT_LOGIN_METHOD:
      return {
        ...state,
        method: action.data,
      }
    case actions.LOGIN_ERROR:
      return {
        ...state,
        error: action.errors,
      }
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
}