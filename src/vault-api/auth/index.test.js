// @flow
import AuthApi from '.';
import UrlSpec from '../url-spec';
import Vault from '..';

jest.mock('..');
Vault.mockImplementation(() => ({
  fetch: jest.fn(),
}));

describe('Auth API', () => {
  it('is mounted at /v1/auth', () => {
    const v = new Vault('url', 'token');
    const auth = new AuthApi(v);
    auth.fetch(new UrlSpec());
    expect(v.fetch).toHaveBeenCalledWith(new UrlSpec('/v1/auth'), undefined);
  });
});
