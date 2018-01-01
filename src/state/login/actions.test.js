// @flow
import uuid from 'uuid/v4';
import * as actions from './actions';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

describe('login action creators', () => {
  [
    { method: 'loginSuccess', action: actions.LOGIN_SUCCESS, key: 'vault' },
    { method: 'selectLoginMethod', action: actions.SELECT_LOGIN_METHOD, key: 'method' },
    { method: 'addPolicy', action: actions.ADD_POLICY, key: 'policy' },
    { method: 'removePolicy', action: actions.REMOVE_POLICY, key: 'policy' },
  ].map(({ method, action, key }) => tests.actionCreator(method, action, key, uuid()));
  tests.errorActionCreator('loginError', actions.LOGIN_ERROR);

  describe('loginStart', () => {
    const id = uuid();
    const data = uuid();
    const action = actions.loginStart({ method: id, customData: data });
    it('should populate the method attribute', () => {
      expect(action.type).toBe(actions.LOGIN_START);
    });
    it('should pass through custom attributes', () => {
      expect(action.payload.customData).toBe(data);
    });
  });
});
