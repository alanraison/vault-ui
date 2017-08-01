export const SELECT_LOGIN_METHOD = 'SELECT_LOGIN_METHOD';
export type SELECT_LOGIN_METHOD = typeof SELECT_LOGIN_METHOD;
export interface SelectLoginMethod {
  type: SELECT_LOGIN_METHOD,
  data: any,
};
export const selectLoginMethod = (data: any): SelectLoginMethod => ({
  type: SELECT_LOGIN_METHOD,
  data,
});
export const LOGIN_START = 'LOGIN_START';
export type LOGIN_START = typeof LOGIN_START;
export interface LoginStart {
  type: LOGIN_START,
  data: any,
};
export const loginStart = (data: any): LoginStart => ({
  type: LOGIN_START,
  data,
});
export const LOGIN_ERROR = 'LOGIN_ERROR';
export type LOGIN_ERROR = typeof LOGIN_ERROR;
export interface LoginError {
  type: LOGIN_ERROR,
  err: Error,
};
export const loginError = (err: Error): LoginError => ({
  type: LOGIN_ERROR,
  err,
});
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;
export interface LoginSuccess {
  type: LOGIN_SUCCESS,
  data: any,
}
export const loginSuccess = (data: any): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  data,
});

export type LoginAction =
  SelectLoginMethod
  | LoginStart
  | LoginError
  | LoginSuccess;