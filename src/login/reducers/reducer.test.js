import loginReducer from './index';
import * as actions from '../actions';
import methodReducer from '../methods/reducers';

jest.mock('../methods/reducers');

it('should be able to choose the login method', () => {
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