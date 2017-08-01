import * as sealStatus from '../../sealStatus/actions';
import * as unseal from '../../unseal/actions';
import * as login from '../../login/actions';

export const ERROR = 'ERROR';
export type ERROR = typeof ERROR;
export interface ErrorAction {
  type: ERROR,
  err: Error,
  source: string
}
export const error = (err: Error, source: string): ErrorAction => ({
  type: ERROR,
  err,
  source,
});

export const CLEAR_ERROR = 'CLEAR_ERROR';
export type CLEAR_ERROR = typeof CLEAR_ERROR;
export interface ClearErrorAction {
  type: CLEAR_ERROR,
}
export const clearError = (): ClearErrorAction => ({
  type: CLEAR_ERROR,
});

export type CoreAction = ErrorAction | ClearErrorAction;

export type Action = CoreAction
  | sealStatus.SealStatusAction
  | unseal.UnsealAction
  | login.LoginAction

export {
  sealStatus,
  unseal,
  login,
}