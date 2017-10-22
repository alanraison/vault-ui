import SysApi, { UnauthenticatedSysApi } from './sys';
import Vault, { UnauthenticatedVault } from '.';

import UrlSpec from './url-spec';

jest.mock('.');
UnauthenticatedVault.mockImplementation(() => ({
  fetch: jest.fn(),
}));

describe('The Unauthenticated Vault Sys API', () => {
  let vault;
  let sys;

  beforeEach(() => {
    vault = new UnauthenticatedVault();
    sys = new UnauthenticatedSysApi(vault);
  });

  it('should contain a Vault', () => {
    expect(vault).toBeTruthy();
    expect(sys.vault).toBe(vault);
  });
  it('should build urls under /v1/sys', () => {
    const spec = new UrlSpec('/api');
    sys.fetch(spec);
    expect(vault.fetch).toHaveBeenCalledWith(spec.prefixPath('/v1/sys'), undefined);
  });
  describe('health', () => {
    it('should call the health API', () => {
      sys.health();
      expect(vault.fetch).toHaveBeenCalledWith(new UrlSpec('/v1/sys/health'), undefined);
    });
    it('should accept parameters to change the return codes', () => {
      const options = {
        sealcode: 300,
        standbyok: true,
        activecode: 418,
      };
      sys.health(options);
      expect(vault.fetch).toHaveBeenCalledWith(new UrlSpec('/v1/sys/health', options), undefined);
    });
  });
  describe('sealStatus', () => {
    it('should call the seal-status API', () => {
      sys.sealStatus();
      expect(vault.fetch).toBeCalledWith(new UrlSpec('/v1/sys/seal-status'), undefined);
    });
  });
  describe('unseal', () => {
    it('should call the unseal API', () => {
      const body = { key: 'abcde' };
      sys.unseal(body);
      expect(vault.fetch).toHaveBeenCalledWith(new UrlSpec('/v1/sys/unseal'), {
        method: 'PUT',
        body: JSON.stringify(body),
      });
    });
    it('should reset the unseal process with the reset option', () => {
      const body = { reset: true };
      sys.unseal(body);
      expect(vault.fetch).toHaveBeenCalledWith(new UrlSpec('/v1/sys/unseal'), {
        method: 'PUT',
        body: JSON.stringify(body),
      });
    });
  });
});

Vault.mockImplementation(() => ({
  fetch: jest.fn(),
}));

describe('The Authenticated Sys API', () => {
  let vault;
  let sys;

  beforeEach(() => {
    vault = new Vault('http://vault', 'token');
    sys = new SysApi(vault);
  });
  describe('mounts', () => {
    it('should call the mount API', () => {
      sys.mounts();
      expect(vault.fetch).toHaveBeenCalledWith(new UrlSpec('/v1/sys/mounts'), undefined);
    });
  });
});
