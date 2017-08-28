import uuid from 'uuid/v4';
import * as actions from '.';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

describe('sealStatus actionCreators', () => {
  [
    { method: 'getUnsealStatusStart', action: actions.GET_UNSEAL_STATUS_START },
    { method: 'getUnsealStatusResult', action: actions.GET_UNSEAL_STATUS_RESULT, key: 'status', payload: uuid() },
  ].map(({ method, action, key, payload }) => tests.actionCreator(method, action, key, payload));
});
