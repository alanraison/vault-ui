import SysApi, { UnauthenticatedSysApi } from './sys';

import UrlSpec from './url-spec';

describe('The Unauthenticated Vault Sys API', () => {
  let sys;
  let fetcher;

  beforeEach(() => {
    fetcher = jest.fn();
    sys = new UnauthenticatedSysApi(fetcher);
  });
  it('should build urls under /v1/sys', () => {
    const spec = new UrlSpec('/api');
    sys.fetch(spec);
    expect(fetcher).toHaveBeenCalledWith(spec.prefixPath('/v1/sys'), undefined);
  });
  describe('health', () => {
    it('should call the health API', () => {
      sys.health();
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/v1/sys/health'), undefined);
    });
    it('should accept parameters to change the return codes', () => {
      const options = {
        sealcode: 300,
        standbyok: true,
        activecode: 418,
      };
      sys.health(options);
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/v1/sys/health', options), undefined);
    });
  });
  describe('sealStatus', () => {
    it('should call the seal-status API', () => {
      sys.sealStatus();
      expect(fetcher).toBeCalledWith(new UrlSpec('/v1/sys/seal-status'), undefined);
    });
  });
  describe('unseal', () => {
    it('should call the unseal API', () => {
      const body = { key: 'abcde' };
      sys.unseal(body);
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/v1/sys/unseal'), {
        method: 'PUT',
        body: JSON.stringify(body),
      });
    });
    it('should reset the unseal process with the reset option', () => {
      const body = { reset: true };
      sys.unseal(body);
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/v1/sys/unseal'), {
        method: 'PUT',
        body: JSON.stringify(body),
      });
    });
  });
});

describe('The Authenticated Sys API', () => {
  let sys;
  let fetcher;

  beforeEach(() => {
    fetcher = jest.fn();
    sys = new SysApi(fetcher);
  });
  describe('mounts', () => {
    it('should call the mount API', () => {
      sys.mounts();
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/v1/sys/mounts'), undefined);
    });
  });
  describe('policies', () => {
    it('should call the policy API', () => {
      sys.policies();
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/v1/sys/policy'), undefined);
    });
  });
  describe('policy', () => {
    it('should call the policy API with the policy name', () => {
      sys.policy('foo');
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/v1/sys/policy/foo'), undefined);
    });
  });
});
