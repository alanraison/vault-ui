import { runSaga } from 'redux-saga';
import { login, startLogin, logout } from './sagas';
import * as actions from './actions';
import * as coreActions from '../core/core-actions';
import * as methods from './methods/sagas';

jest.mock('./methods/sagas');

describe('login saga handler', () => {
  afterEach(() => {
    methods.myMethod.mockReset();
  });
  it('should call the relevant function for the login method', async () => {
    const dispatched = [];
    methods.myMethod = jest.fn();
    await runSaga({
      getState: () => ({ app: { vault: {} } }),
      dispatch: action => dispatched.push(action),
    }, login, actions.loginStart({ method: 'myMethod' })).done;
    expect(methods.myMethod).toHaveBeenCalled();
    expect(dispatched).toHaveLength(1);
    expect(dispatched[0]).toEqual(actions.loginSuccess(undefined));
  });
  it('should dispatch an error on error', async () => {
    const dispatched = [];
    const error = new Error('test error');
    methods.myMethod = jest.fn(() => { throw error; });
    await runSaga({
      getState: () => ({ app: { vault: {} } }),
      dispatch: action => dispatched.push(action),
    }, login, actions.loginStart({ method: 'myMethod' })).done;
    expect(methods.myMethod).toHaveBeenCalled();
    expect(dispatched).toHaveLength(1);
    expect(dispatched[0]).toEqual(actions.loginError(error));
  });
});

describe('startLogin saga', () => {
  describe('when there is no token in the store', () => {
    it('should dispatch a startChooseLoginMethod action', async () => {
      const dispatched = [];
      await runSaga({
        getState: () => ({ app: { vault: {} } }),
        dispatch: action => dispatched.push(action),
      }, startLogin).done;
      expect(dispatched).toHaveLength(1);
      expect(dispatched[0]).toEqual(actions.startChooseLoginMethod());
    });
  });
  describe('when there is an existing token in the store', () => {
    it('should dispatch a loginSuccess action', async () => {
      const dispatched = [];
      await runSaga({
        getState: () => ({ app: { vault: { token: true } } }),
        dispatch: action => dispatched.push(action),
      }, startLogin).done;
      expect(dispatched).toHaveLength(1);
      expect(dispatched[0]).toEqual(actions.loginSuccess({ token: true }));
    });
  });
});

describe('logout saga handler', () => {
  it('should reinitialise the vault', async () => {
    const dispatched = [];
    await runSaga({
      getState: () => ({ app: { vault: { token: 'abcde' } } }),
      dispatch: action => dispatched.push(action),
    }, logout).done;
    expect(dispatched).toHaveLength(1);
    expect(dispatched[0].type).toEqual(coreActions.INITIALISE);
  });
});