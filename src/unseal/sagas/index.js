import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import * as actions from '../actions';
import * as statusActions from '../../sealStatus/actions';
import * as globalActions from '../../core/actions';
import * as api from '../api';


function* callUnseal(action) {
  try {
    const status = yield call(api.unseal, action.payload);
    if (status.errors) {
      yield put(globalActions.error(status.errors, 'unsealing vault'));
    } else {
      yield put(statusActions.getUnsealStatusResult(status));
    }
  } catch (e) {
    yield put(globalActions.error(e, 'unsealing vault'));
  }
}

export default function* () {
  yield takeLatest(actions.START_UNSEAL, callUnseal);
}
