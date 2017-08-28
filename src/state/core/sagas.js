import {
  all,
  call,
  select,
  spawn,
  put,
  takeEvery,
} from 'redux-saga/effects';
import sealStatus from '../sealStatus/sagas';
import auth from '../login/sagas';
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
});

function* handleRouteChange({ type }) {
  yield spawn(routesMap[type]);
}

function* startLogin() {
  const authToken = yield select(state => state.app.authToken);
  if (!authToken) {
    yield put(actions.login.startChooseLoginMethod());
  }
}

export default function* () {
  yield takeEvery(Object.keys(routesMap), handleRouteChange);
}
