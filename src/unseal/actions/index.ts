export const EDIT_UNSEAL_KEY = 'EDIT_UNSEAL_KEY';
export type EDIT_UNSEAL_KEY = typeof EDIT_UNSEAL_KEY;
export const START_UNSEAL = 'START_UNSEAL';
export type START_UNSEAL = typeof START_UNSEAL;
export const UNSEAL_ERROR = 'UNSEAL_ERROR';
export type UNSEAL_ERROR = typeof UNSEAL_ERROR;

export interface EditUnsealKey {
  type: EDIT_UNSEAL_KEY,
  data: any,
}
export const editUnsealKey = (data: any): EditUnsealKey => ({
  type: EDIT_UNSEAL_KEY,
  data,
});
export interface StartUnseal {
  type: START_UNSEAL,
  data: any,
}
export const startUnseal = (data: any): StartUnseal => ({
  type: START_UNSEAL,
  data,
});
export interface UnsealError {
  type: UNSEAL_ERROR,
  err: Error,
}
export const unsealError = (err: Error): UnsealError => ({
  type: UNSEAL_ERROR,
  err,
});
export type UnsealAction = 
  EditUnsealKey
  | StartUnseal
  | UnsealError;