// @flow
import UrlSpec from '../url-spec';

export default class UserPassApi {
  fetch: (UrlSpec, mixed) => Promise<any>;

  constructor(fetcher: (UrlSpec, mixed) => Promise<any>) {
    this.fetch = (url: UrlSpec, init: mixed) => fetcher(url.prefixPath('/userpass'), init);
  }

  login(username: string, password: string) {
    return this.fetch(new UrlSpec(`/${username}`).prefixPath('/login'), {
      method: 'POST',
      body: JSON.stringify({ password }),
    });
  }
}
