import uuid from 'uuid/v4';
import * as actions from '.';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

describe('login action creators', () => {
  [
    { method: 'loginStart', action: actions.LOGIN_START },
    { method: 'loginSuccess', action: actions.LOGIN_SUCCESS },
    { method: 'selectLoginMethod', action: actions.SELECT_LOGIN_METHOD },
  ].map(({ method, action }) => tests.actionCreator(method, action, uuid()));
  tests.errorActionCreator('loginError', actions.LOGIN_ERROR);
});
