// @flow
import type { Generator } from 'flow';
import { select, put, call } from 'redux-saga/effects';
import type { Effect } from 'redux-saga/effects';
import { getVault } from '../core/selectors';
import type Vault, { UnauthenticatedVault } from '../../vault-api';
import { debug } from '../core/sagas';

export function* initialise(): Generator<Effect, void, void> {
  const vault: Vault = yield select(getVault);
  const policies = yield call(vault.sys.policies);
  policies.map();
  yield put(debug(policies));
}

export const a = null;
