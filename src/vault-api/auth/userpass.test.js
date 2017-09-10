import UserPass from './userpass';
import AuthApi from '.';
import UrlSpec from '../url-spec';

jest.mock('./');
AuthApi.mockImplementation(() => ({
  fetch: jest.fn(),
}));

describe('The userpass API', () => {
  describe('login', () => {
    it('should call /userpass/login', () => {
      const auth = new AuthApi(null);
      const userpass = new UserPass(auth);
      userpass.login('scott', 'tiger');
      expect(auth.fetch).toHaveBeenLastCalledWith(
        new UrlSpec('/userpass/login/scott'), {
          method: 'POST',
          body: JSON.stringify({ password: 'tiger' }),
        });
    });
  });
});
