// @flow
export const UNSEAL_STATUS_REQUEST = 'vault-ui/seal-status/UNSEAL_STATUS_REQUEST';
export type UnsealStatusRequestAction = {
  +type: 'vault-ui/seal-status/UNSEAL_STATUS_REQUEST',
};
export const unsealStatusRequest = (): UnsealStatusRequestAction => ({
  type: UNSEAL_STATUS_REQUEST,
});

export const UNSEAL_STATUS_RESPONSE = 'vault-ui/seal-status/UNSEAL_STATUS_RESPONSE';
export type UnsealStatusResponseAction = {
  +type: 'vault-ui/seal-status/UNSEAL_STATUS_RESPONSE',
  +payload: {
    +status: any,
  },
};
export const unsealStatusResponse = (status: any): UnsealStatusResponseAction => ({
  type: UNSEAL_STATUS_RESPONSE,
  payload: { status },
});

export const UNSEAL_KEY_REQUIRED = 'vault-ui/seal-status/UNSEAL_KEY_REQUIRED';
export type UnsealKeyRequiredAction = {
  +type: 'vault-ui/seal-status/UNSEAL_KEY_REQUIRED',
};
export const unsealKeyRequired = (): UnsealKeyRequiredAction => ({
  type: UNSEAL_KEY_REQUIRED,
});

export const UNSEAL_COMPLETE = 'vault-ui/seal-status/UNSEAL_COMPLETE';
export type UnsealCompleteAction = {
  +type: 'vault-ui/seal-status/UNSEAL_COMPLETE',
};
export const unsealComplete = (): UnsealCompleteAction => ({
  type: UNSEAL_COMPLETE,
});
export const UNSEAL_REQUEST = 'vault-ui/seal-status/UNSEAL_REQUEST';
export type UnsealRequestAction = {
  +type: 'vault-ui/seal-status/UNSEAL_REQUEST',
  +payload: {
    +key: string,
  },
};
export const unsealRequest = (key: string): UnsealRequestAction => ({
  type: UNSEAL_REQUEST,
  payload: { key },
});
export const UNSEAL_ERROR = 'vault-ui/seal-status/UNSEAL_ERROR';
export type UnsealErrorAction = {
  +type: 'vault-ui/seal-status/UNSEAL_ERROR',
  +payload: {
    +err: Error,
  },
};
export const unsealError = (err: Error): UnsealErrorAction => ({
  type: UNSEAL_ERROR,
  payload: { err },
});
export type SealStatusAction =
  UnsealStatusRequestAction |
  UnsealStatusResponseAction |
  UnsealKeyRequiredAction |
  UnsealCompleteAction |
  UnsealRequestAction |
  UnsealErrorAction;
