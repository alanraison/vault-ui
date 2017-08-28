import {
  call,
  spawn,
  put,
  takeEvery,
} from 'redux-saga/effects';
import * as sealStatus from '../sealStatus/sagas';
import * as unseal from '../unseal/sagas';
import * as login from '../login/sagas';
import actions from '../../actions';
import * as api from './api';

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

const routesMap = ({
  [actions.INITIALISE]: initialise,
  [actions.sealStatus.GET_UNSEAL_STATUS_START]: sealStatus.callGetSealStatus,
  [actions.sealStatus.GET_UNSEAL_STATUS_RESULT]: sealStatus.isSealed,
  [actions.unseal.START_UNSEAL]: unseal.callUnseal,
  [actions.sealStatus.UNSEAL_COMPLETE]: login.startLogin,
  [actions.login.LOGIN_START]: login.login,
});

function* handleRouteChange(action) {
  yield spawn(routesMap[action.type], action);
}

export default function* () {
  yield takeEvery(Object.keys(routesMap), handleRouteChange);
}
