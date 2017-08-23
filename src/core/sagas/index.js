import {
  all,
  call,
  select,
  put,
  takeLatest,
} from 'redux-saga/effects';
import sealStatus from '../../sealStatus/sagas';
import auth from '../../login/sagas';
import * as actions from '../actions';
import * as api from '../api';

function* healthCheck() {
  try {
    yield call(api.healthCheck);
    yield put(actions.healthCheckOk());
  } catch (e) {
    yield put(actions.error(e, 'connecting to Vault'));
  }
}

function* initialise() {
  yield healthCheck();
  yield put(actions.sealStatus.getUnsealStatusStart());
}

function* startLogin() {
  const authToken = yield select(state => state.app.authToken);
  if (!authToken) {
    yield put(actions.login.loginStart());
  }
}

export default function* () {
  yield all([
    takeLatest(actions.INITIALISE, initialise),
    takeLatest(actions.HEALTH_CHECK_START, healthCheck),
    takeLatest(actions.sealStatus.UNSEAL_COMPLETE, startLogin),
    sealStatus(),
    auth(),
  ]);
}
