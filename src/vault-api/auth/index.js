import TokenApi from './token';
import UserPassApi from './userpass';

export default class AuthApi {
  constructor(vault) {
    this.vault = vault;
    this.token = new TokenApi(this);
    this.userpass = new UserPassApi(this);
  }
  fetch(url, init) {
    return this.vault.fetch(url.prefixPath('/v1/auth'), init);
  }
}
