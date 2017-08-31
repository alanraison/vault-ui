import UrlAssembler from 'url-assembler';
import { SysApi, UnauthenticatedSysApi } from './sys';
import Vault, { UnauthenticatedVault } from './vault';

jest.mock('./vault');
const addr = 'http://foo';
UnauthenticatedVault.mockImplementation(() => ({
  urlBuilder: new UrlAssembler(addr),
}));

describe('The Unauthenticated Vault Sys API', () => {
  let vault;
  let sys;

  beforeEach(() => {
    vault = new UnauthenticatedVault(addr);
    sys = new UnauthenticatedSysApi(vault);
  });

  it('should contain a Vault', () => {
    expect(vault).toBeTruthy();
    expect(sys.vault).toBe(vault);
    expect(vault.sys).toBe(sys);
  });
  it('should build urls under /v1/sys', () => {
    expect(sys.urlBuilder.toString()).toEqual('http://foo/v1/sys');
  });
  describe('health', () => {
    beforeEach(() => {
      fetch.mockResponse(JSON.stringify({ testResponse: true }));
    });
    afterEach(() => {
      fetch.resetMocks();
    });
    it('should call the health API', () => (
      sys.health().then(() => {
        expect(fetch).toHaveBeenCalledWith(`${addr}/v1/sys/health`);
      })
    ));
    it('should accept parameters to change the return codes', () => (
      sys.health({
        sealcode: 300,
        standbyok: true,
        activecode: 418,
      }).then(() => {
        expect(fetch).toHaveBeenCalledWith(`${addr}/v1/sys/health?sealcode=300&standbyok=true&activecode=418`);
      })
    ));
  });
});
