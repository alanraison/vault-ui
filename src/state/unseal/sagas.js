import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import actions from '../../actions';
import * as api from './api';


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
  yield takeLatest(actions.unseal.START_UNSEAL, callUnseal);
}
