import UserPass from './userpass';
import UrlSpec from '../url-spec';

describe('The userpass API', () => {
  describe('login', () => {
    it('should call /userpass/login', () => {
      const fetch = jest.fn();
      const userpass = new UserPass(fetch);
      userpass.login('scott', 'tiger');
      expect(fetch).toHaveBeenLastCalledWith(new UrlSpec('/userpass/login/scott'), {
        method: 'POST',
        body: JSON.stringify({ password: 'tiger' }),
      });
    });
  });
});
