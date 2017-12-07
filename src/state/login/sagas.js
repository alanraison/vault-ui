// @flow
import { put, call, select } from 'redux-saga/effects';
import type { Generator } from 'flow';
import type { Effect } from 'redux-saga/effects';
import * as actions from './actions';
import * as methods from './methods/sagas';
import { getVault } from '../core/selectors';

export function* startLogin(): Generator<Effect, void, void> {
  const vault = yield select(getVault);
  if (!vault.token) {
    yield put(actions.startChooseLoginMethod());
  } else {
    yield put(actions.loginSuccess());
  }
}

export function* login(action: LoginAction): Generator<Effect, void, {type: string, payload: any}> {
  const {
    method: loginMethod,
    loginData,
  } = action.payload.data;
  const vault = yield select(getVault);
  try {
    const newVault = yield call(methods[loginMethod], vault, loginData);
    yield put(actions.loginSuccess(newVault));
  } catch (e) {
    yield put(actions.loginError(e));
  }
}
