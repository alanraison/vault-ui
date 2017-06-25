import { 
  call, 
  put,
  takeLatest, 
} from 'redux-saga/effects';
import * as actions from '../actions';
import * as statusActions from '../../actions';
import * as api from '../api';


function* callUnseal(action) {
  try {
    const status = yield call(api.unseal, action.data);
    yield put(statusActions.unsealStatusUpdated(status));
  } catch (e) {
    yield put(actions.unsealError(e))
  }
}

export default function* () {
  yield takeLatest(actions.START_UNSEAL, callUnseal);
}