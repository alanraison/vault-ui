// @flow
import UrlSpec from '../url-spec';
import type AuthApi from '.';

export default class UserPassApi {
  authApi: AuthApi;
  login: (string, string) => Promise<string>;

  constructor(authApi: AuthApi) {
    this.authApi = authApi;
    this.login = this.login.bind(this);
  }
  fetch(url: UrlSpec, init: any) {
    return this.authApi.fetch(url.prefixPath('/userpass'), init);
  }
  login(username: string, password: string) {
    return this.fetch(new UrlSpec(`/${username}`).prefixPath('/login'), {
      method: 'POST',
      body: JSON.stringify({ password }),
    });
  }
}
