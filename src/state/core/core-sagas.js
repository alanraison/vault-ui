import {
  call,
  select,
  spawn,
  put,
  takeEvery,
} from 'redux-saga/effects';
import * as actions from '../actions';
import * as selectors from './core-selectors';
import routesMap from './core-routes';

export function* healthCheck() {
  try {
    const vault = yield select(selectors.getVault);
    yield put(actions.healthCheckRequest());
    yield call([vault.sys, vault.sys.health], { sealedcode: 200 });
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

export function* handleRouteChange(action) {
  yield spawn(routesMap[action.type], action);
}

export default function* () {
  yield takeEvery(Object.keys(routesMap), handleRouteChange);
}
