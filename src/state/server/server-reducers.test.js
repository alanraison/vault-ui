import * as actions from '../actions';
import reducer from './server-reducers';

describe('server state reducer', () => {
  it('updates the connected status on health check response', () => {
    const oldState = { connected: false };
    const newState = reducer(oldState, actions.healthCheckResponse({ ok: true }));
    expect(newState.connected).toBeTruthy();
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
      const oldState = { loading: 0 };
      const newState = reducer(oldState, creator('a'));
      expect(newState.loading).toBe(1);
    });
  });
});