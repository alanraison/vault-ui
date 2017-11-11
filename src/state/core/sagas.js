import {
  call,
  select,
  spawn,
  put,
  takeEvery,
} from 'redux-saga/effects';
import * as sealStatus from '../seal-status/sagas';
// import * as workspace from '../workspace/sagas';
import * as login from '../login/sagas';
import * as actions from '../actions';
import * as selectors from './selectors';

export function* healthCheck() {
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

export function* initialise() {
  if (yield call(healthCheck)) {
    yield put(actions.sealStatus.unsealStatusRequest());
  }
}

export function* debug(action) {
  // eslint-disable-next-line no-console
  yield console.log(`DEBUG ACTION: ${JSON.stringify(action.payload)}`);
}

const routesMap = ({
  [actions.INITIALISE]: initialise,
  [actions.sealStatus.UNSEAL_STATUS_REQUEST]: sealStatus.callGetSealStatus,
  [actions.sealStatus.UNSEAL_STATUS_RESPONSE]: sealStatus.isSealed,
  [actions.sealStatus.UNSEAL_REQUEST]: sealStatus.callUnseal,
  [actions.sealStatus.UNSEAL_COMPLETE]: login.startLogin,
  [actions.login.LOGIN_START]: login.login,
  // [actions.login.LOGIN_SUCCESS]: workspace.initialise,
  [actions.DEBUG]: debug,
});

function* handleRouteChange(action) {
  yield spawn(routesMap[action.type], action);
}

export default function* () {
  yield takeEvery(Object.keys(routesMap), handleRouteChange);
}
