import uuid from 'uuid/v4';
import TokenApi from './token';
import UrlSpec from '../url-spec';

describe('token API', () => {
  let token;
  let fetcher;
  beforeEach(() => {
    fetcher = jest.fn();
    token = new TokenApi(fetcher);
  });
  it('should be mounted at /token', () => {
    const init = { test: uuid() };
    token.fetch(new UrlSpec(), init);
    expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token'), init);
  });
  describe('create', () => {
    it('should call create token', () => {
      token.create();
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/create'), { method: 'POST' });
    });
    it('should pass options if provided', () => {
      const options = {
        id: 'id',
        role_name: 'test-role',
      };
      token.create(options);
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/create'), {
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
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/create-orphan'), {
        method: 'POST',
        body: JSON.stringify(options),
      });
    });
  });
  describe('listAccessors', () => {
    it('should call the list-accessors API', () => {
      token.listAccessors();
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/list-accessors'), {
        method: 'LIST',
      });
    });
  });
  describe('lookup', () => {
    it('should call lookup for a given token', () => {
      token.lookup('the-token');
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/lookup'), {
        method: 'POST',
        body: JSON.stringify({ token: 'the-token' }),
      });
    });
  });
  describe('lookupSelf', () => {
    it('should call the lookup-self API', () => {
      token.lookupSelf();
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/lookup-self'), undefined);
    });
  });
  describe('lookupAccessor', () => {
    it('should call the lookup-accessor API', () => {
      token.lookupAccessor('token');
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/lookup-accessor'), {
        method: 'POST',
        body: JSON.stringify({ accessor: 'token' }),
      });
    });
  });
  describe('renew', () => {
    it('should call the renew API', () => {
      token.renew({ token: 'abcd', increment: '1h' });
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/renew'), {
        method: 'POST',
        body: JSON.stringify({ token: 'abcd', increment: '1h' }),
      });
    });
  });
  describe('renewSelf', () => {
    it('should call the renew-self API', () => {
      token.renewSelf({ increment: '1d' });
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/renew-self'), {
        method: 'POST',
        body: JSON.stringify({ increment: '1d' }),
      });
    });
  });
  describe('revoke', () => {
    it('should call the revoke API', () => {
      token.revoke('token');
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/revoke'), {
        method: 'POST',
        body: JSON.stringify({ token: 'token' }),
      });
    });
  });
  describe('revokeSelf', () => {
    it('should call the revoke-self API', () => {
      token.revokeSelf();
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/revoke-self'), {
        method: 'POST',
      });
    });
  });
  describe('revokeAccessor', () => {
    it('should call the revoke-accessor API', () => {
      token.revokeAccessor({ accessor: 'accessor' });
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/revoke-accessor'), {
        method: 'POST',
        body: JSON.stringify({ accessor: 'accessor' }),
      });
    });
  });
  describe('revokeOrphan', () => {
    it('should call the revoke-orphan API', () => {
      token.revokeOrphan('abcde');
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/revoke-orphan'), {
        method: 'POST',
        body: JSON.stringify({ token: 'abcde' }),
      });
    });
  });
  describe('getRole', () => {
    it('should call the roles resource for the role id', () => {
      token.getRole('id');
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/roles/').suffixPathParam('id'), undefined);
    });
  });
  describe('getRoles', () => {
    it('should list the roles resource', () => {
      token.getRoles();
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/roles'), {
        method: 'LIST',
      });
    });
  });
  describe('updateRole', () => {
    it('should post to the roles resource', () => {
      token.updateRole({
        role_name: 'alan',
        disallowed_policies: 'default',
      });
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/roles/alan'), {
        body: JSON.stringify({ disallowed_policies: 'default' }),
        method: 'POST',
      });
    });
  });
  describe('deleteRole', () => {
    it('should delete a role resource', () => {
      token.deleteRole('alan');
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/roles/alan'), {
        method: 'DELETE',
      });
    });
  });
  describe('tidy', () => {
    it('should call the tidy API', () => {
      token.tidy();
      expect(fetcher).toHaveBeenCalledWith(new UrlSpec('/token/tidy'), {
        method: 'POST',
      });
    });
  });
});
