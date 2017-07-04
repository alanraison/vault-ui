import { all } from 'redux-saga/effects';
import sealStatus from '../sealStatus/sagas';
import auth from '../login/sagas';

export default function* () {
  yield all([
    sealStatus(),
    auth()
  ]);
}