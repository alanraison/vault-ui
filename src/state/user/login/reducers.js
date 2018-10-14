// @flow
import * as actions from './actions';
import methods from './methods';

export type LoginState = {
  method: string | null,
  policies: Set<string>,
  loggedIn: boolean,
}

const initialState: LoginState = {
  method: null,
  policies: new Set(['secrets_read', 'secrets_write']),
  loggedIn: false,
};

export default (state: LoginState = initialState, action: actions.LoginAction) => {
  switch (action.type) {
    case actions.START_CHOOSE_LOGIN_METHOD:
      return {
        ...state,
        method: null,
      };
    case actions.SELECT_LOGIN_METHOD:
      return {
        ...state,
        method: action.payload.method,
        [action.payload.method]: methods[action.payload.method](undefined, action),
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.err,
      };
    case actions.LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };
    case actions.ADD_POLICY: {
      if (!state.policies.has(action.payload.policy)) {
        const policies: Set<string> = new Set(state.policies);
        policies.add(action.payload.policy);
        return {
          ...state,
          policies,
        };
      }
      return state;
    }
    case actions.REMOVE_POLICY: {
      if (state.policies.has(action.payload.policy)) {
        const policies: Set<string> = new Set(state.policies);
        policies.delete(action.payload.policy);
        return {
          ...state,
          policies,
        };
      }
      return state;
    }
    default: {
      const { method } = state;
      if (method) {
        const currentMethodState = state[method];
        const newMethodState = methods[method](state[method], action);

        if (currentMethodState !== newMethodState) {
          return {
            ...state,
            [method]: newMethodState,
          };
        }
      }
      return state;
    }
  }
};
