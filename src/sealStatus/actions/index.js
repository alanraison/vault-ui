import {
  ERROR,
  error,
} from '../../core/actions';

export const GET_UNSEAL_STATUS_START = 'GET_UNSEAL_STATUS_START';
export const UNSEAL_STATUS_UPDATED = 'UNSEAL_STATUS_UPDATED';

export const getUnsealStatusStart = () => ({
  type: GET_UNSEAL_STATUS_START,
});
export const unsealStatusUpdated = (data) => ({
  type: UNSEAL_STATUS_UPDATED,
  data,
});

export {
  ERROR,
  error,
}