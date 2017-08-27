export const SELECT_LOGIN_METHOD = 'SELECT_LOGIN_METHOD';
export const selectLoginMethod = payload => ({
  type: SELECT_LOGIN_METHOD,
  payload,
});
export const LOGIN_START = 'LOGIN_START';
export const loginStart = payload => ({
  type: LOGIN_START,
  payload,
});
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = err => ({
  type: LOGIN_ERROR,
  err,
});
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});
