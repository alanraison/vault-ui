import {
  call,
  put,
  select,
} from 'redux-saga/effects';
import { login, startLogin } from './sagas';
import * as actions from './actions';
import { getVault } from '../core/selectors';

describe('login saga handler', () => {
  it('should get the current vault API instance', () => {
    const gen = login(actions.loginStart('myMethod'));
    const next = gen.next().value;
    expect(next).toEqual(select(getVault));
  });
  it('should call the relevant function for the login method', () => {
    // TODO
  });
});

describe('startLogin saga', () => {
  let saga;
  beforeEach(() => {
    saga = startLogin();
  });
  it('should fetch the current Vault API instance', () => {
    const vault = saga.next();
    expect(vault.value).toEqual(select(getVault));
  });
  describe('with an unauthenticated session', () => {
    it('should put a startChooseLoginMethod action', () => {
      saga.next();
      const putEffect = saga.next({ token: false });
      expect(putEffect.value).toEqual(put(actions.startChooseLoginMethod()));
      expect(saga.next().done).toBeTruthy();
    });
  });
  describe('with an authenticated session', () => {
    it('should put a loginSuccess action', () => {
      saga.next();
      const putEffect = saga.next({ token: true });
      expect(putEffect.value).toEqual(put(actions.loginSuccess()));
      expect(saga.next().done).toBeTruthy();
    });
  });
});
