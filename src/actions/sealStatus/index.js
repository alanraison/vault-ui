export const GET_UNSEAL_STATUS_START = 'vault-ui/sealStatus/GET_UNSEAL_STATUS_START';
export const getUnsealStatusStart = () => ({
  type: GET_UNSEAL_STATUS_START,
});

export const GET_UNSEAL_STATUS_RESULT = 'vault-ui/sealStatus/GET_UNSEAL_STATUS_RESULT';
export const getUnsealStatusResult = status => ({
  type: GET_UNSEAL_STATUS_RESULT,
  payload: { status },
});

export const UNSEAL_KEY_REQUIRED = 'vault-ui/sealStatus/UNSEAL_KEY_REQUIRED';
export const unsealKeyRequired = () => ({
  type: UNSEAL_KEY_REQUIRED,
});

export const UNSEAL_COMPLETE = 'vault-ui/sealStatus/UNSEAL_COMPLETE';
export const unsealComplete = () => ({
  type: UNSEAL_COMPLETE,
});

export const EDIT_UNSEAL_KEY = 'vault-ui/sealStatus/EDIT_UNSEAL_KEY';
export const editUnsealKey = key => ({
  type: EDIT_UNSEAL_KEY,
  payload: { key },
});
export const START_UNSEAL = 'vault-ui/sealStatus/START_UNSEAL';
export const startUnseal = key => ({
  type: START_UNSEAL,
  payload: { key },
});
export const UNSEAL_ERROR = 'vault-ui/sealStatus/UNSEAL_ERROR';
export const unsealError = err => ({
  type: UNSEAL_ERROR,
  payload: { err },
});
