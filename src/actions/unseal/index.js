export const EDIT_UNSEAL_KEY = 'EDIT_UNSEAL_KEY';
export const START_UNSEAL = 'START_UNSEAL';
export const UNSEAL_ERROR = 'UNSEAL_ERROR';

export const editUnsealKey = key => ({
  type: EDIT_UNSEAL_KEY,
  payload: { key },
});
export const startUnseal = key => ({
  type: START_UNSEAL,
  payload: { key },
});
export const unsealError = err => ({
  type: UNSEAL_ERROR,
  payload: { err },
});
