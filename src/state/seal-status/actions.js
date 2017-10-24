export const UNSEAL_STATUS_REQUEST = 'vault-ui/sealStatus/UNSEAL_STATUS_REQUEST';
export const unsealStatusRequest = () => ({
  type: UNSEAL_STATUS_REQUEST,
});

export const UNSEAL_STATUS_RESPONSE = 'vault-ui/sealStatus/UNSEAL_STATUS_RESPONSE';
export const unsealStatusResponse = status => ({
  type: UNSEAL_STATUS_RESPONSE,
  payload: { status },
});

export const UNSEAL_KEY_REQUIRED = 'vault-ui/sealStatus/UNSEAL_KEY_REQUIRED';
export const unsealKeyRequired = () => ({
  type: UNSEAL_KEY_REQUIRED,
});

export const EDIT_UNSEAL_KEY = 'vault-ui/sealStatus/EDIT_UNSEAL_KEY';
export const editUnsealKey = value => ({
  type: EDIT_UNSEAL_KEY,
  payload: { value },
});

export const UNSEAL_COMPLETE = 'vault-ui/sealStatus/UNSEAL_COMPLETE';
export const unsealComplete = () => ({
  type: UNSEAL_COMPLETE,
});
export const UNSEAL_REQUEST = 'vault-ui/sealStatus/UNSEAL_REQUEST';
export const unsealRequest = key => ({
  type: UNSEAL_REQUEST,
  payload: { key },
});
export const UNSEAL_ERROR = 'vault-ui/sealStatus/UNSEAL_ERROR';
export const unsealError = err => ({
  type: UNSEAL_ERROR,
  payload: { err },
});
