import {
  all,
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';
import actions from '../../actions';
import * as api from './api';
import unsealSagas from '../unseal/sagas';

export function* callGetSealStatus() {
  try {
    const status = yield call(api.getSealStatus);
    yield put(actions.sealStatus.getUnsealStatusResult(status));
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
    const status = yield call(api.unseal, action.payload.key);
    if (status.errors) {
      yield put(actions.error(status.errors, 'unsealing vault'));
    } else {
      yield put(actions.sealStatus.getUnsealStatusResult(status));
    }
  } catch (e) {
    yield put(actions.error(e, 'unsealing vault'));
  }
}

export default function* () {
  yield all([
    takeLatest(actions.GET_UNSEAL_STATUS_START, callGetSealStatus),
    takeLatest(actions.GET_UNSEAL_STATUS_RESULT, isSealed),
    unsealSagas(),
  ]);
}
