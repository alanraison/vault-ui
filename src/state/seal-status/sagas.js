import { call, select, put } from 'redux-saga/effects';
import * as actions from '../actions';
import { getVault } from '../core/selectors';

export function* callGetSealStatus() {
  try {
    const vault = yield select(getVault);
    const body = yield call(vault.sys.sealStatus);
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
    const vault = yield select(getVault);
    const body = yield call(vault.sys.unseal, { key: action.payload.key });
    yield put(actions.sealStatus.unsealStatusResponse(body));
  } catch (e) {
    yield put(actions.error(e, 'unsealing vault'));
  }
}
