import { Action } from 'redux';
import { CHANGE_TOKEN, ChangeToken } from '../actions';

export type StoreState = string;

export default (state = '', action: Action) => {
  switch (action.type) {
    case CHANGE_TOKEN:
      return (action as ChangeToken).data;
    default:
      return state;
  }
};