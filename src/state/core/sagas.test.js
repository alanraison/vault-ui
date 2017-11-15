import {
  call,
  put,
  spawn,
} from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import * as actions from '../actions';
import {
  healthCheck,
  initialise,
  handleRouteChange,
} from './sagas';
import actionRoutes from './routes';

jest.mock('./routes');

describe('healthCheck', () => {
  it('should call the health API', async () => {
    const vaultHealthMock = { sys: { health: jest.fn() } };
    await runSaga({
      dispatch: () => null,
      getState: () => ({ app: { vault: vaultHealthMock } }),
    }, healthCheck).done;
    expect(vaultHealthMock.sys.health).toHaveBeenCalledWith({ sealedcode: 200 });
  });
  describe('when the health check is successful', () => {
    let dispatched;
    let vaultHealthMock;
    let result;
    beforeEach(async () => {
      dispatched = [];
      vaultHealthMock = { sys: { health: jest.fn() } };
      result = await runSaga({
        dispatch: action => dispatched.push(action),
        getState: () => ({ app: { vault: vaultHealthMock } }),
      }, healthCheck).done;
    });
    it('should dispatch a success healthCheckResponse action', async () => {
      expect(dispatched).toContainEqual(actions.healthCheckResponse());
    });
    it('should return true', async () => {
      expect(result).toBeTruthy();
    });
  });
  describe('when the health check encounters an error', () => {
    let dispatched;
    let vaultHealthMock;
    let err;
    let result;
    beforeEach(async () => {
      dispatched = [];
      err = new Error('test error');
      const mock = jest.fn().mockImplementation(() => {
        throw err;
      });
      vaultHealthMock = { sys: { health: mock } };
      result = await runSaga({
        dispatch: action => dispatched.push(action),
        getState: () => ({ app: { vault: vaultHealthMock } }),
      }, healthCheck).done;
    });
    it('should put an error action if there is an error fetching the status', async () => {
      expect(dispatched).toContainEqual(actions.error(err, 'connecting to Vault'));
    });
    it('should return false if there was an error fetching the status', async () => {
      expect(result).toBeFalsy();
    });
  });
});

describe('initialise', () => {
  let gen;
  beforeEach(() => {
    gen = initialise();
  });
  it('should call the healthcheck', () => {
    const next = gen.next();
    expect(next.value).toEqual(call(healthCheck));
  });
  it('should put an unsealStatusRequest action if the healthcheck returned ok', () => {
    gen.next();
    const putEffect = gen.next(true);
    expect(putEffect.value).toEqual(put(actions.sealStatus.unsealStatusRequest()));
    expect(gen.next().done).toBeTruthy();
  });
  it('should finish if the healthcheck returned false', () => {
    gen.next();
    expect(gen.next(false).done).toBeTruthy();
  });
});

describe('handleRouteChange', () => {
  it('spawns a new task for the action handler', () => {
    const mockHandler = function* test() { yield; };
    actionRoutes.MY_ACTION = mockHandler;
    const action = { type: 'MY_ACTION' };
    const saga = handleRouteChange(action);
    const effect = saga.next();
    expect(effect.value).toEqual(spawn(mockHandler, action));
  });
});
