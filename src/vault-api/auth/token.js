// @flow
import UrlSpec from '../url-spec';
import type AuthApi from '.';

export default class TokenApi {
  authApi: AuthApi;
  create: () => Promise<string>;
  lookup: () => Promise<string>;

  constructor(authApi: AuthApi) {
    this.authApi = authApi;
    this.create = this.create.bind(this);
    this.lookup = this.lookup.bind(this);
  }
  fetch(url: UrlSpec, init: any) {
    return this.authApi.fetch(url.prefixPath('/token'), init);
  }
  /**
   * Create a new token.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#create-token}
   *
   * @param options - create options
   * @param {string} options.id - the ID to give to the new token (can only be specified by root
   *  tokens)
   */
  create(options: { id?: string }) {
    return this.fetch(new UrlSpec('/create'), {
      method: 'POST',
      body: JSON.stringify(options),
    });
  }
  /**
   * Create a new orphan token.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#create-token}
   */
  createOrphan(options: any) {
    return this.fetch(new UrlSpec('/create-orphan'), {
      method: 'POST',
      body: JSON.stringify(options),
    });
  }
  /**
   * List accessors of the current token.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#list-accessors}
   */
  listAccessors() {
    return this.fetch(new UrlSpec('/list-accessors'), {
      method: 'LIST',
    });
  }
  /**
   * Lookup information about a token.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#lookup-a-token}
   *
   * @param {string} token - optional token
   */
  lookup(token: string) {
    return this.fetch(new UrlSpec('/lookup'), {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
  }
  /**
   * Lookup information about the current token.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#lookup-a-token-self-}
   */
  lookupSelf() {
    return this.fetch(new UrlSpec('/lookup-self'));
  }
  /**
   * Returns information about the client token from the accessor.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#lookup-a-token-accessor}
   */
  lookupAccessor(accessor: mixed) {
    return this.fetch(new UrlSpec('/lookup-accessor'), {
      method: 'POST',
      body: JSON.stringify({ accessor }),
    });
  }
  /**
   * Renew a token.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#renew-a-token}
   * @param {string} options.token - The token to renew
   * @param {string} options.increment - An optional requested lease increment can be provided.
   *    This increment may be ignored.
   */
  renew(options: { token?: string, increment?: string }) {
    return this.fetch(new UrlSpec('/renew'), {
      method: 'POST',
      body: JSON.stringify(options),
    });
  }
  /**
   * Renew the current token.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#renew-a-token-self-}
   * @param {string} options.increment - An optional requested lease increment can be provided.
   *    This increment may be ignored.
   */
  renewSelf(options: { increment?: string }) {
    return this.fetch(new UrlSpec('/renew-self'), {
      method: 'POST',
      body: JSON.stringify(options),
    });
  }
  /**
   * Revoke a token.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#revoke-a-token}
   */
  revoke(token: string) {
    return this.fetch(new UrlSpec('/revoke'), {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
  }
  /**
   * Revoke the current token.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#revoke-a-token-self-}
   */
  revokeSelf() {
    return this.fetch(new UrlSpec('/revoke-self'), {
      method: 'POST',
    });
  }
  /**
   * Revoke a token accessor.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#revoke-a-token-accessor}
   * @param {string} options.accessor - accessor of the token
   */
  revokeAccessor(options: { accessor: string }) {
    return this.fetch(new UrlSpec('/revoke-accessor'), {
      method: 'POST',
      body: JSON.stringify(options),
    });
  }
  /**
   * Revoke a token but not its child tokens.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#revoke-token-and-orphan-children}
   *
   * @param {string} token - the token to revoke
   */
  revokeOrphan(token: string) {
    return this.fetch(new UrlSpec('/revoke-orphan'), {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
  }
  /**
   * Lookup the named role.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#read-token-role}
   */
  getRole(name: string) {
    return this.fetch(new UrlSpec('/roles/').suffixPathParam(name));
  }
  /**
   * List roles.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#list-token-roles}
   */
  getRoles() {
    return this.fetch(new UrlSpec('/roles'), {
      method: 'LIST',
    });
  }
  /**
   * Create/Update a role.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#create-update-token-role}
   */
  updateRole(options: { role_name: string, params: mixed[] }) {
    const { role_name, ...params } = options;
    return this.fetch(new UrlSpec('/roles/').suffixPathParam(role_name), {
      method: 'POST',
      body: JSON.stringify(params),
    });
  }
  /**
   * Delete a role.
   * @param {string} role - the role name
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#delete-token-role}
   */
  deleteRole(role: string) {
    return this.fetch(new UrlSpec('/roles/').suffixPathParam(role), {
      method: 'DELETE',
    });
  }
  /**
   * Clean up tokens.
   */
  tidy() {
    return this.fetch(new UrlSpec('/tidy'), {
      method: 'POST',
    });
  }
}
