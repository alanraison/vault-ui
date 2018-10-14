import { call } from 'redux-saga/effects';
import Vault from '../../../../../vault-api';

export default function* token(vault, data) {
  const tok = data.loginData;
  const addr = vault.vaultAddr;
  const v = new Vault(addr, tok);
  const response = yield call([v.auth.token, v.auth.token.create]);
  const subtok = response.auth ? response.auth.client_token : null;
  return new Vault(addr, subtok);
}
