import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';
import * as actions from '../actions';
import * as globalActions from '../../actions';
import * as api from '../api';
import unsealSagas from '../../unseal/sagas';

function* callGetSealStatus() {
  try {
    const status = yield call(api.getSealStatus);
    yield put(actions.unsealStatusUpdated(status));
  } catch(e) {
    yield put(globalActions.error(e, "getting unseal status"));
  }
}

export default function* () {
  yield takeLatest(actions.GET_UNSEAL_STATUS_START, callGetSealStatus);
  yield unsealSagas();
}