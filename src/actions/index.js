import * as sealStatus from '../sealStatus/actions';
import * as unseal from '../unseal/actions';
import * as login from '../login/actions';

export const ERROR = 'ERROR';
export const error = (err, source) => ({
  type: ERROR,
  err,
  source,
});

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const clearError = () => ({
  type: CLEAR_ERROR,
});

export {
  sealStatus,
  unseal,
  login,
}