import { put, call, select } from 'redux-saga/effects';
import * as actions from './actions';
import Vault from '../../vault-api';
import { getVault } from '../core/selectors';

export function* startLogin() {
  const vault = yield select(getVault);
  if (!vault.token) {
    yield put(actions.startChooseLoginMethod());
  } else {
    yield put(actions.loginSuccess());
  }
}

const methods = {
  token: function* token(vault, tok) {
    const addr = vault.vaultAddr;
    const v = new Vault(addr, tok);
    const subtok = yield call(v.auth.token.create);
    return new Vault(addr, subtok);
  },
};

export function* login(action) {
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
