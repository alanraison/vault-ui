// @flow
import uuid from 'uuid/v4';
import * as actions from './actions';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

type TestData = {
  method: string,
  action: string,
  key?: string
}

describe('sealStatus actionCreators', () => {
  [
    { method: 'unsealStatusRequest', action: actions.UNSEAL_STATUS_REQUEST },
    { method: 'unsealStatusResponse', action: actions.UNSEAL_STATUS_RESPONSE, key: 'status' },
    { method: 'unsealRequest', action: actions.UNSEAL_REQUEST },
    { method: 'editUnsealKey', action: actions.EDIT_UNSEAL_KEY, key: 'value' },
  ].map(({ method, action, key }: TestData) => tests.actionCreator(method, action, key, uuid()));
});
