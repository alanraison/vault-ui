import TokenApi from './token';

export default class AuthApi {
  constructor(vault) {
    this.vault = vault;
    this.token = new TokenApi(this);
  }
  fetch(url, init) {
    return this.vault.fetch(url.prefixPath('/v1/auth'), init);
  }
}
