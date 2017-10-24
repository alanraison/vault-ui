import uuid from 'uuid/v4';
import * as actions from './actions';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

describe('login action creators', () => {
  [
    { method: 'loginStart', action: actions.LOGIN_START, key: 'data' },
    { method: 'loginSuccess', action: actions.LOGIN_SUCCESS, key: 'vault' },
    { method: 'selectLoginMethod', action: actions.SELECT_LOGIN_METHOD, key: 'method' },
    { method: 'addPolicy', action: actions.ADD_POLICY, key: 'policy' },
    { method: 'removePolicy', action: actions.REMOVE_POLICY, key: 'policy' },
  ].map(({ method, action, key }) => tests.actionCreator(method, action, key, uuid()));
  tests.errorActionCreator('loginError', actions.LOGIN_ERROR);
});