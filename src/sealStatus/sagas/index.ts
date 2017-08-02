import {
  all,
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as actions from '../actions';
import * as coreActions from '../../core/actions';
import * as api from '../api';
import unsealSagas from '../../unseal/sagas';

function* callGetSealStatus() {
  try {
    const status = yield call(api.getSealStatus);
    yield put(actions.unsealStatusUpdated(status));
  } catch(e) {
    yield put(coreActions.error(e, "getting unseal status"));
  }
}

export default function* (): SagaIterator {
  yield all([
    takeLatest<actions.GetUnsealStatusStart>(actions.GET_UNSEAL_STATUS_START, callGetSealStatus),
    unsealSagas(),
  ]);
}