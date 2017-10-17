export const START_CHOOSE_LOGIN_METHOD = 'vault-ui/login/START_CHOOSE_LOGIN_METHOD';
export const startChooseLoginMethod = () => ({
  type: START_CHOOSE_LOGIN_METHOD,
});

export const SELECT_LOGIN_METHOD = 'vault-ui/login/SELECT_LOGIN_METHOD';
export const selectLoginMethod = method => ({
  type: SELECT_LOGIN_METHOD,
  payload: { method },
});
export const LOGIN_START = 'vault-ui/login/LOGIN_START';
export const loginStart = data => ({
  type: LOGIN_START,
  payload: { data },
});
export const LOGIN_ERROR = 'vault-ui/login/LOGIN_ERROR';
export const loginError = err => ({
  type: LOGIN_ERROR,
  payload: { err },
});
export const LOGIN_SUCCESS = 'vault-ui/login/LOGIN_SUCCESS';
export const loginSuccess = vault => ({
  type: LOGIN_SUCCESS,
  payload: { vault },
});
export const ADD_POLICY = 'vault-ui/login/ADD_POLICY';
export const addPolicy = policy => ({
  type: ADD_POLICY,
  payload: { policy },
});
export const REMOVE_POLICY = 'vault-ui/login/REMOVE_POLICY';
export const removePolicy = policy => ({
  type: REMOVE_POLICY,
  payload: { policy },
});
