import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';
import unsealSagas from '../unseal/sagas';

function* callGetSealStatus() {
  try {
    const status = yield call(api.getSealStatus);
    yield put(actions.unsealStatusUpdated(status));
  } catch(e) {
    yield put(actions.getUnsealStatusError(e));
  }
}

export default function* () {
  yield takeLatest(actions.GET_UNSEAL_STATUS_START, callGetSealStatus);
  yield unsealSagas();
}