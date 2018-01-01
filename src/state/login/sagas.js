// @flow
import { put, call, select } from 'redux-saga/effects';
import type { Effect } from 'redux-saga/effects';
import * as actions from './actions';
import * as methods from './methods/sagas';
import { getVault } from '../core/selectors';
import Vault from '../../vault-api';

export function* startLogin(): Generator<Effect, void, Vault> {
  const vault = yield select(getVault);
  if (!vault.token) {
    yield put(actions.startChooseLoginMethod());
  } else {
    yield put(actions.loginSuccess(vault));
  }
}

export function* login(action: actions.LoginStartAction)
  : Generator<Effect, void, Vault> {
  const {
    method: loginMethod,
    ...loginData
  } = action.payload;
  const vault = yield select(getVault);
  try {
    const newVault = (yield call(methods[loginMethod], vault, loginData): Vault);
    yield put(actions.loginSuccess(newVault));
  } catch (e) {
    yield put(actions.loginError(e));
  }
}
