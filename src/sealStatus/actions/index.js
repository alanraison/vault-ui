import {
  ERROR,
  error,
} from '../../core/actions';

export const GET_UNSEAL_STATUS_START = 'GET_UNSEAL_STATUS_START';
export const GET_UNSEAL_STATUS_RESULT = 'GET_UNSEAL_STATUS_RESULT';
export const UNSEAL_KEY_REQUIRED = 'UNSEAL_KEY_REQUIRED';
export const UNSEAL_KEY_ENTERED = 'UNSEAL_KEY_ENTERED'; //TODO verify
export const UNSEAL_COMPLETE = 'UNSEAL_COMPLETE';

export const getUnsealStatusStart = () => ({
  type: GET_UNSEAL_STATUS_START,
});
export const getUnsealStatusResult = data => ({
  type: GET_UNSEAL_STATUS_RESULT,
  data,
});
export const unsealKeyRequired = () => ({
  type: UNSEAL_KEY_REQUIRED,
});
export const unsealComplete = () => ({
  type: UNSEAL_COMPLETE,
});

export {
  ERROR,
  error,
};
