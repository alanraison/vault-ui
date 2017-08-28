import {
  all,
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';
import actions from '../../../actions';
// import * as coreActions from '../../core/actions';
import * as api from '../api';
import unsealSagas from '../../unseal/sagas';

function* callGetSealStatus() {
  try {
    const status = yield call(api.getSealStatus);
    yield put(actions.sealStaus.getUnsealStatusResult(status));
  } catch (e) {
    yield put(actions.error(e, 'getting unseal status'));
  }
}

function* isSealed(action) {
  if (action.payload.sealed) {
    yield put(actions.sealStatus.unsealKeyRequired());
  } else {
    yield put(actions.sealStatus.unsealComplete());
  }
}

export default function* () {
  yield all([
    takeLatest(actions.GET_UNSEAL_STATUS_START, callGetSealStatus),
    takeLatest(actions.GET_UNSEAL_STATUS_RESULT, isSealed),
    unsealSagas(),
  ]);
}
