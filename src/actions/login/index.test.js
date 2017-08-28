import uuid from 'uuid/v4';
import * as actions from '.';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

describe('login action creators', () => {
  [
    { method: 'loginStart', action: actions.LOGIN_START, key: 'method' },
    { method: 'loginSuccess', action: actions.LOGIN_SUCCESS, key: 'auth' },
    { method: 'selectLoginMethod', action: actions.SELECT_LOGIN_METHOD, key: 'method' },
  ].map(({ method, action, key }) => tests.actionCreator(method, action, key, uuid()));
  tests.errorActionCreator('loginError', actions.LOGIN_ERROR);
});
