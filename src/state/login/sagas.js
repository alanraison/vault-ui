// @flow
import { put, call, select } from 'redux-saga/effects';
import type { Effect } from 'redux-saga';
import * as actions from '../actions';
import * as methods from './methods/sagas';
import { getVault } from '../core/core-selectors';
import Vault, { UnauthenticatedVault } from '../../vault-api';

export function* startLogin(): Generator<Effect, void, Vault> {
  // const token = sessionStorage.getItem('token');
  // if (!token) {
  const vault = yield select(getVault);
  if (!vault.token) {
    yield put(actions.login.startChooseLoginMethod());
  } else {
    yield put(actions.login.loginSuccess(vault));
  }
  // } else {
  //   const vault = yield select(getVault);
  //   const newVault = new Vault(vault.vaultAddr, token);
  //   yield put(actions.login.loginSuccess(newVault));
  // }
}

export function* login(action: actions.login.LoginStartAction)
  : Generator<Effect, void, Vault> {
  const {
    method: loginMethod,
    ...loginData
  } = action.payload;
  const vault = yield select(getVault);
  try {
    const newVault = (yield call(methods[loginMethod], vault, loginData): Vault);
    // sessionStorage.setItem('token', newVault.token);
    yield put(actions.login.loginSuccess(newVault));
  } catch (e) {
    yield put(actions.login.loginError(e));
  }
}

export function* logout(): Generator<Effect, void, UnauthenticatedVault> {
  // sessionStorage.removeItem('token');
  const vault = yield select(getVault);
  yield put(actions.initialise(new UnauthenticatedVault(vault.vaultAddr)));
}
