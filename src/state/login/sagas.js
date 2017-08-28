import { put, call, select } from 'redux-saga/effects';
import * as actions from '../../actions/login';
import * as api from './api';

export function* startLogin() {
  const authToken = yield select(state => state.app.authToken);
  if (!authToken) {
    yield put(actions.startChooseLoginMethod());
  } else {
    yield put(actions.loginSuccess());
  }
}

export function* login(action) {
  const loginMethod = action.payload.method;
  const loginData = yield select(state => state.app.login[loginMethod]);
  try {
    const auth = yield call(api.login, loginMethod, loginData);
    if (auth.errors) {
      yield put(actions.loginError(auth));
    } else {
      yield put(actions.loginSuccess(auth));
    }
  } catch (e) {
    yield put(actions.loginError(e));
  }
}
