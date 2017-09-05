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
export const loginStart = method => ({
  type: LOGIN_START,
  payload: { method },
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
