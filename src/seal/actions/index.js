export const GET_UNSEAL_STATUS_START = 'GET_UNSEAL_STATUS_START';
export const GET_UNSEAL_STATUS_ERROR = 'GET_UNSEAL_STATUS_ERROR';
export const UNSEAL_STATUS_UPDATED = 'UNSEAL_STATUS_UPDATED';

export const getUnsealStatusStart = () => ({
  type: GET_UNSEAL_STATUS_START,
});
export const getUnsealStatusError = (err) => ({
  type: GET_UNSEAL_STATUS_ERROR,
  err,
});
export const unsealStatusUpdated = (data) => ({
  type: UNSEAL_STATUS_UPDATED,
  data,
});