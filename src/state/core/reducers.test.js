import uuid from 'uuid/v4';
import reducer, { getAppState, getVault } from './reducers';
import actions from '../../actions';

describe('Core reducers:', () => {
  describe('Error reducer', () => {
    it('should set the error on an error action', () => {
      const testError = new Error('test error');
      const errorSource = 'test';
      const newState = reducer({}, actions.error(testError, errorSource));
      expect(newState.error.err).toEqual(testError);
      expect(newState.error.source).toEqual(errorSource);
    });
    it('should clear the error on a CLEAR_ERROR action', () => {
      const oldState = {
        error: {
          err: new Error('test'),
          source: 'test',
        },
      };
      const newState = reducer(oldState, actions.clearError());
      expect(newState.error).toBeNull();
    });
    it('should leave the error on all other actions', () => {
      const oldState = {
        error: {
          err: new Error('test'),
          source: 'test',
        },
      };
      const newState = reducer(oldState, actions.sealStatus.unsealRequest(''));
      expect(newState.error).toEqual(oldState.error);
    });
  });
  describe('Connected reducer', () => {
    it('should set the connected status if the health check succeeds', () => {
      const newState = reducer({}, actions.healthCheckResponse());
      expect(newState.connected).toEqual(true);
    });
    it('should not respond to other actions', () => {
      const newState = reducer({ connected: 'test' }, actions.clearError());
      expect(newState.connected).toEqual('test');
    });
  });
  describe('Auth token reducer', () => {
    it('should update the auth token on LOGIN_SUCCESS', () => {
      const newState = reducer({ authToken: 'bar' }, actions.login.loginSuccess('baz'));
      expect(newState.authToken).toEqual('baz');
    });
    it('should not respond to other actions', () => {
      const newState = reducer({ authToken: 'alan' }, { type: 'ANY_OLD_ACTION', data: 'foo' });
      expect(newState.authToken).toEqual('alan');
    });
  });
  describe('AppState selector', () => {
    it('should select the app state', () => {
      const appState = uuid();
      const state = { foo: uuid(), app: appState, bar: uuid() };
      expect(getAppState(state)).toBe(appState);
    });
  });
  describe('Vault selector', () => {
    it('should select the vault state', () => {
      const vault = uuid();
      const state = { app: { foo: uuid(), vault, bar: uuid() } };
      expect(getVault(state)).toBe(vault);
    });
  });
});
