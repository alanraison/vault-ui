import * as actions from '../actions';
import methods from './methods';

export type StoreState = {
  method: string | null;
  tokenEntry?: string;
};

const initialState: StoreState = {
  method: null,
};

export default (state: StoreState = initialState, action: actions.LoginAction) => {
  switch (action.type) {
    case actions.SELECT_LOGIN_METHOD:
      return {
        ...state,
        method: action.data,
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        error: action.err,
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