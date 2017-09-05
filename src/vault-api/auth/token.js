import UrlSpec from '../url-spec';

export default class TokenApi {
  constructor(authApi) {
    this.authApi = authApi;
    this.create = this.create.bind(this);
  }
  fetch(url, init) {
    return this.authApi.fetch(url.prefixPath('/token'), init);
  }
  create() {
    return this.fetch(new UrlSpec('/create'), {
      method: 'POST',
    });
  }
}
