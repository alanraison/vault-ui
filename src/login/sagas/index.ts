import { put, call, takeEvery, select } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

export function* login(action: actions.LoginStart) {
  const loginMethod = action.data;
  const loginData = yield select(state => state.app.login[loginMethod]);
  try {
    const auth = yield call(api.login, loginMethod, loginData);
    if (auth.errors) {
      yield put(actions.loginError(auth));
    } else {
      yield put(actions.loginSuccess(auth));
    }
  } catch(e) {
    yield put(actions.loginError(e));
  }
}

export default function* () {
  yield takeEvery(actions.LOGIN_START, login);
}