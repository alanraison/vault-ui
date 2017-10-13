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
import * as selectors from './selectors';

function* healthCheck() {
  try {
    const vault = yield select(selectors.getVault);
    yield call(vault.sys.health, { sealedcode: 200 });
    yield put(actions.healthCheckResponse());
    return true;
  } catch (e) {
    yield put(actions.error(e, 'connecting to Vault'));
  }
  return false;
}

function* initialise() {
  if (yield call(healthCheck)) {
    yield put(actions.sealStatus.unsealStatusRequest());
  }
}

function* debug(action) {
  yield console.log(`DEBUG ACTION: ${JSON.stringify(action.payload)}`);
}

const routesMap = ({
  [actions.INITIALISE]: initialise,
  [actions.sealStatus.UNSEAL_STATUS_REQUEST]: sealStatus.callGetSealStatus,
  [actions.sealStatus.UNSEAL_STATUS_RESPONSE]: sealStatus.isSealed,
  [actions.sealStatus.UNSEAL_REQUEST]: sealStatus.callUnseal,
  [actions.sealStatus.UNSEAL_COMPLETE]: login.startLogin,
  [actions.login.LOGIN_START]: login.login,
  [actions.DEBUG]: debug,
});

function* handleRouteChange(action) {
  yield spawn(routesMap[action.type], action);
}

export default function* () {
  yield takeEvery(Object.keys(routesMap), handleRouteChange);
}
