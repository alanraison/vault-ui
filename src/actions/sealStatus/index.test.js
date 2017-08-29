import uuid from 'uuid/v4';
import * as actions from '.';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

describe('sealStatus actionCreators', () => {
  [
    { method: 'getUnsealStatusStart', action: actions.GET_UNSEAL_STATUS_START },
    { method: 'getUnsealStatusResult', action: actions.GET_UNSEAL_STATUS_RESULT, key: 'status' },
    { method: 'editUnsealKey', action: actions.EDIT_UNSEAL_KEY, key: 'key' },
    { method: 'startUnseal', action: actions.START_UNSEAL },
  ].map(({ method, action, key }) => tests.actionCreator(method, action, key, uuid()));
});
