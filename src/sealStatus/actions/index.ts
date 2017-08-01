import {
  ERROR,
  error,
} from '../../core/actions';

export const GET_UNSEAL_STATUS_START = 'GET_UNSEAL_STATUS_START';
export type GET_UNSEAL_STATUS_START = typeof GET_UNSEAL_STATUS_START;
export interface GetUnsealStatusStart {
  type: GET_UNSEAL_STATUS_START,
}
export const getUnsealStatusStart = (): GetUnsealStatusStart => ({
  type: GET_UNSEAL_STATUS_START,
});

export const UNSEAL_STATUS_UPDATED = 'UNSEAL_STATUS_UPDATED';
export type UNSEAL_STATUS_UPDATED = typeof UNSEAL_STATUS_UPDATED;
export interface UnsealStatusUpdated {
  type: UNSEAL_STATUS_UPDATED,
  data: any,
}
export const unsealStatusUpdated = (data: any): UnsealStatusUpdated => ({
  type: UNSEAL_STATUS_UPDATED,
  data,
});

export type SealStatusAction = GetUnsealStatusStart 
  | UnsealStatusUpdated;

export {
  ERROR,
  error,
}