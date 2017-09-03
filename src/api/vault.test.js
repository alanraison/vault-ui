import Vault, { UnauthenticatedVault } from './vault';
import UrlSpec from './url-spec';

describe('Unauthenticated Vault', () => {
  it('should contain the vault address', () => {
    const vaultAddr = 'http://foo.bar';
    const v = new UnauthenticatedVault(vaultAddr);
    expect(v.vaultAddr).toBe(vaultAddr);
  });
  describe('fetch method', () => {
    beforeEach(() => {
      fetch.mockResponse(JSON.stringify({ testResponse: 1 }));
    });
    afterEach(() => {
      fetch.resetMocks();
    });
    it('should fetch paths from the vault address', () => {
      const vaultAddr = 'http://foo.bar';
      const v = new UnauthenticatedVault(vaultAddr);
      return v.fetch(new UrlSpec('/foo')).then(() => {
        expect(fetch).toHaveBeenCalledWith('http://foo.bar/foo', {});
      });
    });
  });
});
describe('Authenticated Vault', () => {
  it('should contain the authentication token', () => {
    const addr = 'http://my.vault';
    const token = 'secret-token';
    const v = new Vault(addr, token);
    expect(v.token).toEqual(token);
  });
  it('should fetch resources, supplying the auth token', () => {
    const addr = 'http://bar.baz';
    const token = 'vault-tok';
    const v = new Vault(addr, token);
    fetch.mockResponse(JSON.stringify({ testResponse: 1 }));
    return v.fetch(new UrlSpec('/apiCall')).then(() => {
      expect(fetch).toHaveBeenCalled();
      const actualRequest = fetch.mock.calls[0];
      expect(actualRequest[0]).toEqual(`${addr}/apiCall`);
      expect(actualRequest[1].headers.get('x-vault-token')).toEqual(token);
    });
  });
});
