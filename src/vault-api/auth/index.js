// @flow
import TokenApi from './token';
import UserPassApi from './userpass';
import type Vault from '../';
import type UrlSpec from '../url-spec';

export default class AuthApi {
  vault: Vault;
  token: TokenApi;
  userpass: UserPassApi;

  constructor(vault: Vault) {
    this.vault = vault;
    this.token = new TokenApi(this);
    this.userpass = new UserPassApi(this);
  }

  fetch(url: UrlSpec, init: any) {
    return this.vault.fetch(url.prefixPath('/v1/auth'), init);
  }
}
