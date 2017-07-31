import saga, { login } from './';
import { takeEvery, put } from 'redux-saga/effects';
import * as actions from '../actions';

describe('Login saga', () => {
  it('should call the login saga on LOGIN_START actions', () => {
    const gen = saga();
    expect(gen.next().value).toEqual(takeEvery(actions.LOGIN_START, login));
  });
});

describe('login saga handler', () => {
  it('should get the state for the selected login handler', () => {
    const gen = login(actions.loginStart('myMethod'));
    const next = gen.next().value;
    expect(next).toHaveProperty('SELECT');
  });
});