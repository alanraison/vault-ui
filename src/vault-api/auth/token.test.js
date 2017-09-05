import TokenApi from './token';
import AuthApi from './';
import UrlSpec from '../url-spec';

jest.mock('./');
AuthApi.mockImplementation(() => ({
  fetch: jest.fn(),
}));

describe('token login', () => {
  it('should call /auth/token/create', () => {
    const auth = new AuthApi(null);
    const t = new TokenApi(auth);
    t.create();
    expect(auth.fetch).toHaveBeenCalledWith(new UrlSpec('/token/create'), undefined);
  });
});
