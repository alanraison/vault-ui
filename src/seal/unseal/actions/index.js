export const EDIT_UNSEAL_KEY = 'EDIT_UNSEAL_KEY';
export const START_UNSEAL = 'START_UNSEAL';
export const UNSEAL_ERROR = 'UNSEAL_ERROR';

export const editUnsealKey = (data) => ({
  type: EDIT_UNSEAL_KEY,
  data,
});
export const startUnseal = (data) => ({
  type: START_UNSEAL,
  data,
});
export const unsealError = (err) => ({
  type: UNSEAL_ERROR,
  err,
});