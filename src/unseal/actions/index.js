export const GET_UNSEAL_STATUS_START = 'GET_UNSEAL_STATUS_START';
export const GET_UNSEAL_STATUS_COMPLETE = 'GET_UNSEAL_STATUS_COMPLETE';
export const GET_UNSEAL_STATUS_ERROR = 'GET_UNSEAL_STATUS_ERROR';
export const EDIT_UNSEAL_KEY = 'EDIT_UNSEAL_KEY';
export const START_UNSEAL = 'START_UNSEAL';
export const UNSEAL_SUCCESS = 'UNSEAL_SUCCESS';
export const UNSEAL_ERROR = 'UNSEAL_ERROR';

export const getUnsealStatusStart = () => ({
  type: GET_UNSEAL_STATUS_START,
});
export const getUnsealStatusComplete = (data) => ({
  type: GET_UNSEAL_STATUS_COMPLETE,
  data,
});
export const getUnsealStatusError = (err) => ({
  type: GET_UNSEAL_STATUS_ERROR,
  err,
});
export const editUnsealKey = (data) => ({
  type: EDIT_UNSEAL_KEY,
  data,
});
export const startUnseal = () => ({
  type: START_UNSEAL,
});
export const unsealSuccess = () => ({
  type: UNSEAL_SUCCESS,
});
export const unsealError = (err) => ({
  type: UNSEAL_ERROR,
  err,
});