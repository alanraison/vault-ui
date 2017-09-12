import uuid from 'uuid/v4';
import TokenApi from './token';
import AuthApi from './';
import UrlSpec from '../url-spec';

jest.mock('./');
AuthApi.mockImplementation(() => ({
  fetch: jest.fn(),
}));

const auth = new AuthApi(null);
const token = new TokenApi(auth);

describe('token API', () => {
  afterEach(() => {
    auth.fetch.mockReset();
  });
  it('should be mounted at /token', () => {
    const init = { test: uuid() };
    token.fetch(new UrlSpec(), init);
    expect(auth.fetch).toHaveBeenCalledWith(new UrlSpec('/token'), init);
  });
  describe('create', () => {
    it('should call create token', () => {
      token.create();
      expect(auth.fetch).toHaveBeenCalledWith(new UrlSpec('/token/create'), { method: 'POST' });
    });
    it('should pass options if provided', () => {
      const options = {
        id: 'id',
        role_name: 'test-role',
      };
      token.create(options);
      expect(auth.fetch).toHaveBeenCalledWith(new UrlSpec('/token/create'), {
        method: 'POST',
        body: JSON.stringify(options),
      });
    });
  });
  describe('create-orphan', () => {
    it('should call the create-orphan API', () => {
      const options = {
        display_name: 'Brian',
      };
      token.createOrphan(options);
      expect(auth.fetch).toHaveBeenCalledWith(new UrlSpec('/token/create-orphan'), {
        method: 'POST',
        body: JSON.stringify(options),
      });
    });
  });
  describe('lookup', () => {
    it('should call lookup for a given token', () => {
      token.lookup('the-token');
      expect(auth.fetch).toHaveBeenCalledWith(new UrlSpec('/token/lookup'), {
        method: 'POST',
        body: JSON.stringify({ token: 'the-token' }),
      });
    });
  });
  describe('lookupSelf', () => {
    it('should call the lookup-self API', () => {
      token.lookupSelf();
      expect(auth.fetch).toHaveBeenCalledWith(new UrlSpec('/token/lookup-self'), undefined);
    });
  });
  describe('lookupAccessor', () => {
    it('should call the lookup-accessor API', () => {
      token.lookupAccessor('token');
      expect(auth.fetch).toHaveBeenCalledWith(new UrlSpec('/token/lookup-accessor'), {
        method: 'POST',
        body: JSON.stringify({ accessor: 'token' }),
      });
    });
  });
  describe('renew', () => {
    it('should call the renew API', () => {
      token.renew({ token: 'abcd', increment: '1h' });
      expect(auth.fetch).toHaveBeenCalledWith(new UrlSpec('/token/renew'), {
        method: 'POST',
        body: JSON.stringify({ token: 'abcd', increment: '1h' }),
      });
    });
  });
  describe('renewSelf', () => {
    it('should call the renew-self API', () => {
      token.renewSelf({ increment: '1d' });
      expect(auth.fetch).toHaveBeenCalledWith(new UrlSpec('/token/renew-self'), {
        method: 'POST',
        body: JSON.stringify({ increment: '1d' }),
      });
    });
  });
  describe('revoke', () => {
    it('should call the revoke API', () => {
      token.revoke('token');
      expect(auth.fetch).toHaveBeenCalledWith(new UrlSpec('/token/revoke'), {
        method: 'POST',
        body: JSON.stringify({ token: 'token' }),
        okCodes: 204,
      });
    });
  });
  describe('revokeSelf', () => {
    it('should call the revoke-self API', () => {
      token.revokeSelf();
      expect(auth.fetch).toHaveBeenCalledWith(new UrlSpec('/token/revoke-self'), {
        method: 'POST',
        okCodes: 204,
      });
    });
  });
  describe('revokeAccessor', () => {
    it('should call the revoke-accessor API', () => {
      token.revokeAccessor({ accessor: 'accessor' });
      expect(auth.fetch).toHaveBeenCalledWith(new UrlSpec('/token/revoke-accessor'), {
        method: 'POST',
        body: JSON.stringify({ accessor: 'accessor' }),
        okCodes: 204,
      });
    });
  });
});
