import { SysApi, UnauthenticatedSysApi } from './sys';
import Vault, { UnauthenticatedVault } from './vault';

import UrlSpec from './url-spec';

jest.mock('./vault');
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
    expect(vault.fetch).toHaveBeenCalledWith(spec.prefixPath('/v1/sys'), {});
  });
  describe('health', () => {
    it('should call the health API', () => {
      sys.health();
      expect(vault.fetch).toHaveBeenCalledWith(new UrlSpec('/v1/sys/health', {}), {});
    });
    it('should accept parameters to change the return codes', () => {
      const options = {
        sealcode: 300,
        standbyok: true,
        activecode: 418,
      };
      sys.health(options);
      expect(vault.fetch).toHaveBeenCalledWith(new UrlSpec('/v1/sys/health', options), {});
    });
  });
});
