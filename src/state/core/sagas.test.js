import {
  call,
  put,
  select,
} from 'redux-saga/effects';
import { UnauthenticatedVault } from '../../vault-api';
import * as actions from '../actions';
import { healthCheck, initialise } from './sagas';
import { getVault } from './selectors';

describe('healthCheck', () => {
  let gen;
  const vault = new UnauthenticatedVault();
  beforeEach(() => {
    gen = healthCheck();
  });
  it('should retrieve the current Vault', () => {
    const selectVaultEffect = gen.next().value;
    expect(selectVaultEffect).toMatchObject(select(getVault));
  });
  it('should call the health API', () => {
    gen.next();
    const callEffect = gen.next(vault).value;
    expect(callEffect).toEqual(call(vault.sys.health, { sealedcode: 200 }));
  });
  it('should put a success healthCheckResponse action if no errors were thrown', () => {
    gen.next();
    gen.next(vault);
    expect(gen.next().value).toEqual(put(actions.healthCheckResponse()));
  });
  it('should return true if the health check had no errors', () => {
    gen.next();
    gen.next(vault);
    gen.next();
    const returned = gen.next();
    expect(returned.value).toBeTruthy();
    expect(returned.done).toBeTruthy();
  });
  it('should put an error action if there is an error fetching the status', () => {
    gen.next();
    gen.next(vault);
    const e = new Error('test error');
    const errorEffect = gen.throw(e).value;
    expect(errorEffect).toEqual(put(actions.error(e, 'connecting to Vault')));
  });
  it('should return false if there was an error fetching the status', () => {
    gen.next();
    gen.next(vault);
    gen.throw(new Error('error'));
    const returned = gen.next();
    expect(returned.value).toBeFalsy();
    expect(returned.done).toBeTruthy();
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
