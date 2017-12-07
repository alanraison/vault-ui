import Vault from '../../vault-api';
import * as methods from './methods';

export const START_CHOOSE_LOGIN_METHOD = 'vault-ui/login/START_CHOOSE_LOGIN_METHOD';
export type StartChooseLoginMethodAction = {
  +type: 'vault-ui/login/START_CHOOSE_LOGIN_METHOD',
};
export const startChooseLoginMethod = (): StartChooseLoginMethodAction => ({
  type: START_CHOOSE_LOGIN_METHOD,
});

export const SELECT_LOGIN_METHOD = 'vault-ui/login/SELECT_LOGIN_METHOD';
export type SelectLoginMethodAction = {
  +type: 'vault-ui/login/SELECT_LOGIN_METHOD',
  +payload: {
    +method: string,
  },
};
export const selectLoginMethod = (method: string): SelectLoginMethodAction => ({
  type: SELECT_LOGIN_METHOD,
  payload: { method },
});
export const LOGIN_START = 'vault-ui/login/LOGIN_START';
export type LoginStartAction = {
  +type: 'vault-ui/login/LOGIN_START',
  +payload: {
    data: any,
  },
};
export const loginStart = (data: any): LoginStartAction => ({
  type: LOGIN_START,
  payload: { data },
});
export const LOGIN_ERROR = 'vault-ui/login/LOGIN_ERROR';
export type LoginErrorAction = {
  +type: 'vault-ui/login/LOGIN_ERROR',
  +payload: {
    +err: Error,
  },
};
export const loginError = (err: Error): LoginErrorAction => ({
  type: LOGIN_ERROR,
  payload: { err },
});
export const LOGIN_SUCCESS = 'vault-ui/login/LOGIN_SUCCESS';
export type LoginSuccessAction = {
  +type: 'vault-ui/login/LOGIN_SUCCESS';
  +payload: {
    +vault: Vault,
  }
}
export const loginSuccess = (vault: Vault): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: { vault },
});
export const ADD_POLICY = 'vault-ui/login/ADD_POLICY';
export type AddPolicyAction = {
  +type: 'vault-ui/login/ADD_POLICY',
  +payload: {
    policy: any,
  },
};
export const addPolicy = (policy: any): AddPolicyAction => ({
  type: ADD_POLICY,
  payload: { policy },
});
export const REMOVE_POLICY = 'vault-ui/login/REMOVE_POLICY';
export type RemovePolicyAction = {
  +type: 'vault-ui/login/REMOVE_POLICY',
  +payload: {
    policy: string,
  },
};
export const removePolicy = (policy: string): RemovePolicyAction => ({
  type: REMOVE_POLICY,
  payload: { policy },
});

export type LoginAction =
  StartChooseLoginMethodAction |
  SelectLoginMethodAction |
  LoginStartAction |
  LoginErrorAction |
  LoginSuccessAction |
  AddPolicyAction |
  RemovePolicyAction |
  methods.MethodAction;
