import { call } from 'redux-saga/effects';
import Vault from '../../../../vault-api';

export default function* token(vault, tok) {
  const addr = vault.vaultAddr;
  const v = new Vault(addr, tok);
  const subtok = yield call(v.auth.token.create);
  return new Vault(addr, subtok);
}
