import loginReducer from './';
import * as actions from '../actions';
import methodReducer from './methods';

jest.mock('./methods');

describe('Login reducer', () => {
  it('should set the login method', () => {
    const state = {};
    const newState = loginReducer(state, actions.selectLoginMethod("myMethod"));
    expect(newState.method).toEqual("myMethod");
  });

  describe('with a login method set', () => {
    const myMethodState = { key: "test" };
    const state = { method: "myMethod", myMethod: myMethodState };
    const testAction = { type: 'TEST_ACTION' };
    methodReducer.addMethod("myMethod");

    afterEach(() => {
      methodReducer.myMethod.mockReset();
    });

    it('should call the reducer for the selected login method for all actions', () => {
      loginReducer(state, testAction);

      expect(methodReducer.myMethod).toBeCalledWith(state.myMethod, testAction);
    });

    it('should return the reduced state for the selected login method if the state changes', () => {
      const newMethodState = { key: "new" };
      methodReducer.myMethod.mockReturnValue(newMethodState);
      const newState = loginReducer(state, testAction);

      expect(newState.myMethod).toEqual(newMethodState);
    });

    it('should return the existing state if the reducer doesn\'t change the state', () => {
      methodReducer.myMethod.mockReturnValue(myMethodState);
      const newState = loginReducer(state, testAction);

      expect(newState).toBe(state);
    });
  })

  it('should handle errors', () => {
    const state = {}
    const testError = new Error("test error");
    const newState = loginReducer(state, actions.loginError(testError));

    expect(newState.error).toEqual(testError);
  });
  
});