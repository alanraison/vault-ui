export const SELECT_LOGIN_METHOD = 'SELECT_LOGIN_METHOD';
export const selectLoginMethod = (data) => ({
  type: SELECT_LOGIN_METHOD,
  data,
});
export const LOGIN_START = 'LOGIN_START';
export const loginStart = (data) => ({
  type: LOGIN_START,
  data,
});
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = (err) => ({
  type: LOGIN_ERROR,
  err,
});
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data,
});