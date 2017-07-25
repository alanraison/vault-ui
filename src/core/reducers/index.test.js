import reducer from './';
import * as actions from '../actions';

describe('Core reducers:', () => {
  describe('Error reducer', () => {
    it('should set the error on an error action', () => {
      const testError = new Error("test error");
      const errorSource = "test";
      const newState = reducer({}, actions.error(testError, errorSource));
      expect(newState.error.err).toEqual(testError);
      expect(newState.error.source).toEqual(errorSource);
    });
    it('should clear the error on a CLEAR_ERROR action', () => {
      const oldState = {
        error: {
          err: new Error("test"),
          source: "test"
        }
      };
      const newState = reducer(oldState, actions.clearError());
      expect(newState.error).toBeNull();
    });
    it('should leave the error on all other actions', () => {
      const oldState = {
        error: {
          err: new Error("test"),
          source: "test"
        }
      };
      const newState = reducer(oldState, actions.unseal.startUnseal(""));
      expect(newState.error).toEqual(oldState.error);
    });
  });
  describe('Connected reducer', () => {
    it('should set the connected status if the unseal status changes', () => {
      const newState = reducer({}, actions.sealStatus.unsealStatusUpdated("blah"));
      expect(newState.connected).toEqual(true);
    });
    it('should not respond to other actions', () => {
      const newState = reducer({connected: "test"}, actions.clearError());
      expect(newState.connected).toEqual("test");
    });
  });
  describe('Auth token reducer', () => {
    it('should update the auth token on LOGIN_SUCCESS', () => {
      const newState = reducer({authToken: "bar"}, actions.login.loginSuccess("baz"));
      expect(newState.authToken).toEqual("baz");
    });
    it('should not respond to other actions', () => {
      const newState = reducer({authToken: "alan"}, { type: "ANY_OLD_ACTION", data: "foo" });
      expect(newState.authToken).toEqual("alan");
    });
  });
});