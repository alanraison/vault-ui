import loginReducer from './';
import * as actions from '../actions';
import methodReducer from './methods';

jest.mock('./methods');

it('should set the login method', () => {
  const state = {};
  const newState = loginReducer(state, actions.selectLoginMethod("myMethod"));
  expect(newState.method).toEqual("myMethod");
});

it('should call the reducer for the selected login method for all actions', () => {
  const myMethodState = { key: "test" };
  const state = { method: "myMethod", myMethod: myMethodState };
  methodReducer.addMethod("myMethod");
  loginReducer(state, { type: 'TEST_ACTION' });

  expect(methodReducer.myMethod).toBeCalled();
});