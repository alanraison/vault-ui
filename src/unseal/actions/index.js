export const EDIT_UNSEAL_KEY = 'EDIT_UNSEAL_KEY';
export const START_UNSEAL = 'START_UNSEAL';
export const UNSEAL_ERROR = 'UNSEAL_ERROR';

export const editUnsealKey = payload => ({
  type: EDIT_UNSEAL_KEY,
  payload,
});
export const startUnseal = payload => ({
  type: START_UNSEAL,
  payload,
});
export const unsealError = err => ({
  type: UNSEAL_ERROR,
  err,
});
