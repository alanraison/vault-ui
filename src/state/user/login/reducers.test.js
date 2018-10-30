import loginReducer from './reducers';
import * as actions from '../../actions';
import methodReducer from './methods';

jest.mock('./methods');

describe('Login reducer', () => {
  it('should set the login method', () => {
    const state = {};
    const newState = loginReducer(state, actions.login.selectLoginMethod('myMethod'));
    expect(newState.method).toEqual('myMethod');
  });
  it('should unset the login method on START_CHOOSE_LOGIN_METHOD action', () => {
    const state = { method: 'magic' };
    const newState = loginReducer(state, actions.login.startChooseLoginMethod());
    expect(newState.method).toBeNull();
  });
  it('should remove policies when REMOVE_POLICY action received', () => {
    const state = { policies: new Set(['policy-a', 'policy-b']) };
    const newState = loginReducer(state, actions.login.removePolicy('policy-b'));
    expect(newState).toEqual({ policies: new Set(['policy-a']) });
  });
  it('should not remove anything if the policy is not in the list of policies', () => {
    const state = { policies: new Set(['policy-a', 'policy-b']) };
    const newState = loginReducer(state, actions.login.removePolicy('policy-c'));
    expect(newState).toEqual({ policies: new Set(['policy-a', 'policy-b']) });
  });
  it('should add a policy whe ADD_POLICY action received', () => {
    const state = { policies: new Set(['policy-a', 'policy-b']) };
    const newState = loginReducer(state, actions.login.addPolicy('policy-c'));
    expect(newState).toEqual({ policies: new Set(['policy-a', 'policy-b', 'policy-c']) });
  });
  it('should not add the same policy twice', () => {
    const state = { policies: new Set(['policy-a']) };
    const newState = loginReducer(state, actions.login.addPolicy('policy-a'));
    expect(newState).toEqual({ policies: new Set(['policy-a']) });
  });

  it('should logout', () => {
    const state = { loggedIn: true };
    const newState = loginReducer(state, actions.login.logout());
    expect(newState.loggedIn).toBeFalsy();
  });
  describe('with a login method set', () => {
    const myMethodState = { key: 'test' };
    const state = { method: 'myMethod', myMethod: myMethodState };
    const testAction = { type: 'TEST_ACTION' };
    methodReducer.addMethod('myMethod');

    afterEach(() => {
      methodReducer.myMethod.mockReset();
    });

    it('should call the reducer for the selected login method for all actions', () => {
      loginReducer(state, testAction);

      expect(methodReducer.myMethod).toBeCalledWith(state.myMethod, testAction);
    });

    it('should return the reduced state for the selected login method if the state changes', () => {
      const newMethodState = { key: 'new' };
      methodReducer.myMethod.mockReturnValue(newMethodState);
      const newState = loginReducer(state, testAction);

      expect(newState.myMethod).toEqual(newMethodState);
    });

    it('should return the existing state if the reducer doesn\'t change the state', () => {
      methodReducer.myMethod.mockReturnValue(myMethodState);
      const newState = loginReducer(state, testAction);

      expect(newState).toBe(state);
    });
  });

  it('should handle errors', () => {
    const state = {};
    const testError = new Error('test error');
    const newState = loginReducer(state, actions.login.loginError(testError));

    expect(newState.error).toEqual(testError);
  });
});
