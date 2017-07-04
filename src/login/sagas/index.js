import { put, call, takeEvery, select } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

function* login(action) {
  const loginMethod = action.data;
  const loginData = yield select(state => state.app.login[loginMethod]);
  try {
    const auth = yield call(api.login, loginMethod, loginData);
    yield put(actions.loginSuccess(auth));
  } catch(e) {
    yield put(actions.loginError(e));
  }
}

export default function* () {
  yield takeEvery(actions.LOGIN_START, login);
}