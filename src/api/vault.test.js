import Vault, { UnauthenticatedVault } from './vault';

describe('Unauthenticated Vault', () => {
  it('should construct paths under the vault address', () => {
    const vaultAddr = 'http://foo.bar';
    const v = new UnauthenticatedVault(vaultAddr);
    expect(v.baseUrl.toString()).toEqual(vaultAddr);
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
    return v.authFetch(v.baseUrl.segment('/apiCall').toString()).then(() => {
      expect(fetch).toHaveBeenCalled();
      const actualRequest = fetch.mock.calls[0];
      expect(actualRequest[0]).toEqual(`${addr}/apiCall`);
      expect(actualRequest[1].headers.get('x-vault-token')).toEqual(token);
    });
  });
});
