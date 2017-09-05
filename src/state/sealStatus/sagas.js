import { call, select, put } from 'redux-saga/effects';
import actions from '../../actions';
import * as core from '../core/reducers';
import { checkResponse } from '../../vault-api';

export function* callGetSealStatus() {
  try {
    const vault = yield select(core.getVault);
    const response = yield call(vault.sys.sealStatus);
    const body = yield checkResponse(response, 200);
    yield put(actions.sealStatus.unsealStatusResponse(body));
  } catch (e) {
    yield put(actions.error(e, 'getting unseal status'));
  }
}

export function* isSealed(action) {
  if (action.payload.status.sealed) {
    yield put(actions.sealStatus.unsealKeyRequired());
  } else {
    yield put(actions.sealStatus.unsealComplete());
  }
}

export function* callUnseal(action) {
  try {
    const vault = yield select(core.getVault);
    const response = yield call(vault.sys.unseal, { key: action.payload.key });
    const body = yield checkResponse(response, 200);
    yield put(actions.sealStatus.unsealStatusResponse(body));
  } catch (e) {
    yield put(actions.error(e, 'unsealing vault'));
  }
}
