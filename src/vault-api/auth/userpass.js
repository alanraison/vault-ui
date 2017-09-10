import UrlSpec from '../url-spec';

export default class UserPassApi {
  constructor(authApi) {
    this.authApi = authApi;
    this.login = this.login.bind(this);
  }
  fetch(url, init) {
    return this.authApi.fetch(url.prefixPath('/userpass'), init);
  }
  login(username, password) {
    return this.fetch(new UrlSpec(`/${username}`).prefixPath('/login'), {
      method: 'POST',
      body: JSON.stringify({ password }),
    });
  }
}
