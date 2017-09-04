import { call, put } from 'redux-saga/effects';
import actions from '../../actions';
import * as api from '../../api';

export function* callGetSealStatus() {
  try {
    const status = yield call(api.sys.sealStatus);
    yield put(actions.sealStatus.unsealStatusResponse(status));
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
    const status = yield call(api.sys.unseal, action.payload.key);
    if (status.errors) {
      yield put(actions.error(status.errors, 'unsealing vault'));
    } else {
      yield put(actions.sealStatus.unsealStatusResponse(status));
    }
  } catch (e) {
    yield put(actions.error(e, 'unsealing vault'));
  }
}