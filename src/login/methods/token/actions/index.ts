import { Action } from 'redux';
export const CHANGE_TOKEN = 'CHANGE_TOKEN';
export type CHANGE_TOKEN = typeof CHANGE_TOKEN;
export interface ChangeToken extends Action {
  type: CHANGE_TOKEN;
  data: string;
}
export const changeToken = (data: string) => ({
  type: CHANGE_TOKEN,
  data,
});