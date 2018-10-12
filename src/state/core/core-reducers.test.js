import uuid from 'uuid/v4';
import reducer from './core-reducers';
import { getAppState, getVault } from './core-selectors';
import * as actions from '../actions';
import Vault, { UnauthenticatedVault } from '../../vault-api';

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
      expect(newState.error).toEqual({});
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
    it('should update the vault on LOGIN_SUCCESS', () => {
      const one = new UnauthenticatedVault('bar');
      const two = new Vault('baz', '');
      const newState = reducer({ vault: one }, actions.login.loginSuccess(two));
      expect(newState.vault).toEqual(two);
    });
    it('should update the vault on INITIALISE', () => {
      const one = new UnauthenticatedVault('bar');
      const two = new UnauthenticatedVault('bax');
      const newState = reducer({ vault: one }, actions.initialise(two));
      expect(newState.vault).toEqual(two);
    });
  });
  describe('server state reducer', () => {
    it('updates the connected status on health check response', () => {
      const oldState = { server: { connected: false } };
      const newState = reducer(oldState, actions.healthCheckResponse());
      expect(newState.server.connected).toBeTruthy();
    });
    [
      { action: actions.HEALTH_CHECK_REQUEST, creator: actions.healthCheckRequest },
      {
        action: actions.sealStatus.UNSEAL_STATUS_REQUEST,
        creator: actions.sealStatus.unsealStatusRequest,
      },
      { action: actions.login.LOGIN_START, creator: actions.login.loginStart },
    ].forEach(({ action, creator }) => {
      it(`increases the loading count on ${action}`, () => {
        const oldState = { server: { loading: 0 } };
        const newState = reducer(oldState, creator('a'));
        expect(newState.server.loading).toBe(1);
      });
    });
  });
});
