import { 
  call, 
  put,
  takeEvery, 
} from 'redux-saga/effects';
import { 
  getSealStatus 
} from '../api';
import * as unsealActions from '../actions';

function* callGetSealStatus() {
  try {
    const status = yield call(getSealStatus);
    put(unsealActions.getUnsealStatusComplete, status);
  } catch(e) {
    put(unsealActions.unsealError(e));
  }
}

export default function* unseal() {
  yield takeEvery(unsealActions.GET_UNSEAL_STATUS_START, callGetSealStatus);
}