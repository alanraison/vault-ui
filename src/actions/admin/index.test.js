import uuid from 'uuid/v4';
import * as actions from '.';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

describe('action creators', () => {
  [
    { method: 'settings', action: actions.SETTINGS },
    { method: 'enableLoginMethod', action: actions.ENABLE_LOGIN_METHOD, key: 'method' },
  ].map(({ method, action, key }) => tests.actionCreator(method, action, key, uuid()));
});
