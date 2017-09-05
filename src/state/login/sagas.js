import { put, call, select } from 'redux-saga/effects';
import * as actions from '../../actions/login';
import Vault from '../../vault-api';
import { debug } from '../../actions/core';

export function* startLogin() {
  const vault = yield select(state => state.app.vault);
  if (!vault.token) {
    yield put(actions.startChooseLoginMethod());
  } else {
    yield put(actions.loginSuccess());
  }
}

const methods = ({
  token: function* token(vault, tok) {
    const addr = vault.vaultAddr;
    const v = new Vault(addr, tok);
    const subtok = yield call(v.auth.token.create);
    return new Vault(addr, subtok);
  },
});


export function* login(action) {
  const loginMethod = action.payload.method;
  const { loginData, vault } = yield select(state => ({
    loginData: state.app.login[loginMethod],
    vault: state.app.vault,
  }));
  try {
    const newVault = yield call(methods[loginMethod], vault, loginData);
    put(debug(newVault));
    yield put(actions.loginSuccess(newVault));
  } catch (e) {
    yield put(actions.loginError(e));
  }
}
