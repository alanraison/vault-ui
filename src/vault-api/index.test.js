import Vault, { UnauthenticatedVault } from '.';
import UrlSpec from './url-spec';

describe('Unauthenticated Vault', () => {
  const vaultAddr = 'http://foo.bar';
  const v = new UnauthenticatedVault(vaultAddr);
  it('should contain the vault address', () => {
    expect(v.vaultAddr).toBe(vaultAddr);
  });
  describe('fetch method', () => {
    beforeEach(() => {
    });
    afterEach(() => {
      fetch.resetMocks();
    });
    it('should fetch paths from the vault address', () => {
      fetch.mockResponse(JSON.stringify({ testResponse: 1 }));
      return v.fetch(new UrlSpec('/foo')).then(() => {
        expect(fetch).toHaveBeenCalledWith('http://foo.bar/foo', {});
      });
    });
    it('should include the specified options', () => {
      fetch.mockResponse(JSON.stringify({ testResponse: 1 }));
      const options = { method: 'PUT', headers: { 'X-Clacks-Overhead': 'GNU Terry Pratchett' } };
      return v.fetch(new UrlSpec('/baz'), options).then(() => {
        expect(fetch).toHaveBeenCalledWith('http://foo.bar/baz', options);
      });
    });
    it('should throw on unsuccessful return statuses', () => {
      fetch.mockResponse(false, { status: 418, statusText: "I'm a teapot" });
      expect.assertions(1);
      return v.fetch(new UrlSpec()).catch((e) => {
        expect(e.message).toMatch('418');
        // expect(e).toMatch('Short and stout');
      });
    });
  });
});
describe('Authenticated Vault', () => {
  afterEach(() => {
    fetch.resetMocks();
  });
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
  it('should preserve provided headers on fetch', () => {
    const addr = 'http://quux.baz';
    const token = 'vault-tok';
    const v = new Vault(addr, token);
    fetch.mockResponse(JSON.stringify({ testResponse: 2 }));
    const customHeader = new Headers();
    customHeader.set('X-Clacks-Overhead', 'GNU Terry Pratchett');
    return v.fetch(new UrlSpec('/apiCall'), { headers: customHeader }).then(() => {
      const actualRequest = fetch.mock.calls[0];
      expect(actualRequest[1].headers.has('X-Clacks-Overhead')).toBeTruthy();
      expect(actualRequest[1].headers.has('X-Vault-Token')).toBeTruthy();
    });
  });
});
