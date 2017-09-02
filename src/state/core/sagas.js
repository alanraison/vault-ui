import {
  call,
  select,
  spawn,
  put,
  takeEvery,
} from 'redux-saga/effects';
import * as sealStatus from '../sealStatus/sagas';
import * as login from '../login/sagas';
import actions from '../../actions';
import * as selectors from './reducers';

function* healthCheck() {
  try {
    const vault = yield select(selectors.getVault);
    yield call(vault.health); // Throws an error if unhealthy
    yield put(actions.healthCheckOk());
    return true;
  } catch (e) {
    yield put(actions.error(e, 'connecting to Vault'));
    return false;
  }
}

function* initialise() {
  if (yield call(healthCheck)) {
    yield put(actions.sealStatus.getUnsealStatusStart());
  }
}

const routesMap = ({
  [actions.INITIALISE]: initialise,
  [actions.sealStatus.GET_UNSEAL_STATUS_START]: sealStatus.callGetSealStatus,
  [actions.sealStatus.GET_UNSEAL_STATUS_RESULT]: sealStatus.isSealed,
  [actions.sealStatus.START_UNSEAL]: sealStatus.callUnseal,
  [actions.sealStatus.UNSEAL_COMPLETE]: login.startLogin,
  [actions.login.LOGIN_START]: login.login,
});

function* handleRouteChange(action) {
  yield spawn(routesMap[action.type], action);
}

export default function* () {
  yield takeEvery(Object.keys(routesMap), handleRouteChange);
}
