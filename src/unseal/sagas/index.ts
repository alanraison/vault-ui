import { 
  call,
  put,
  takeLatest, 
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as actions from '../actions';
import * as statusActions from '../../sealStatus/actions';
import * as globalActions from '../../core/actions';
import * as api from '../api';


function* callUnseal(action: actions.StartUnseal) {
  try {
    const status = yield call(api.unseal, action.data);
    if (status.errors) {
      yield put(globalActions.error(status.errors, "unsealing vault"));
    } else {
      yield put(statusActions.unsealStatusUpdated(status));
    }
  } catch (e) {
    yield put(globalActions.error(e, "unsealing vault"))
  }
}

export default function* (): SagaIterator {
  yield takeLatest(actions.START_UNSEAL, callUnseal);
}