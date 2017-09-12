import UrlSpec from '../url-spec';

export default class TokenApi {
  constructor(authApi) {
    this.authApi = authApi;
    this.create = this.create.bind(this);
    this.lookup = this.lookup.bind(this);
  }
  fetch(url, init) {
    return this.authApi.fetch(url.prefixPath('/token'), init);
  }
  /**
   * Create a new token
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#create-token}
   *
   * @param options - create options
   * @param {string} options.id - the ID to give to the new token (can only be specified by root
   *  tokens)
   */
  create(options) {
    return this.fetch(new UrlSpec('/create'), {
      method: 'POST',
      body: JSON.stringify(options),
    });
  }
  /**
   * Create a new orphan token
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#create-token}
   */
  createOrphan(options) {
    return this.fetch(new UrlSpec('/create-orphan'), {
      method: 'POST',
      body: JSON.stringify(options),
    });
  }
  /**
   * Lookup information about a token.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#lookup-a-token}
   *
   * @param {string} token - optional token
   */
  lookup(token) {
    return this.fetch(new UrlSpec('/lookup'), {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
  }
  /**
   * Lookup information about the current token
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
  lookupAccessor(accessor) {
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
  renew(options) {
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
  renewSelf(options) {
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
  revoke(token) {
    return this.fetch(new UrlSpec('/revoke'), {
      method: 'POST',
      body: JSON.stringify({ token }),
      okCodes: 204,
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
      okCodes: 204,
    });
  }
  /**
   * Revoke a token accessor.
   *
   * @see {@link https://www.vaultproject.io/api/auth/token/index.html#revoke-a-token-accessor}
   * @param {string} options.accessor - accessor of the token
   */
  revokeAccessor(options) {
    return this.fetch(new UrlSpec('/revoke-accessor'), {
      method: 'POST',
      body: JSON.stringify(options),
      okCodes: 204,
    });
  }
}
