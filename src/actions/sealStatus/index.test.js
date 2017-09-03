import uuid from 'uuid/v4';
import * as actions from '.';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

describe('sealStatus actionCreators', () => {
  [
    { method: 'unsealStatusRequest', action: actions.UNSEAL_STATUS_REQUEST },
    { method: 'unsealStatusResponse', action: actions.UNSEAL_STATUS_RESPONSE, key: 'status' },
    { method: 'editUnsealKey', action: actions.EDIT_UNSEAL_KEY, key: 'key' },
    { method: 'unsealRequest', action: actions.UNSEAL_REQUEST },
  ].map(({ method, action, key }) => tests.actionCreator(method, action, key, uuid()));
});
