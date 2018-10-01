// @flow
import TokenApi from './token';
import UserPassApi from './userpass';
import type UrlSpec from '../url-spec';

export default class AuthApi {
  token: TokenApi;

  userpass: UserPassApi;

  constructor(fetcher: (UrlSpec, mixed) => Promise<any>) {
    const fetch = (url: UrlSpec, init: mixed) => fetcher(url.prefixPath('/v1/auth'), init);
    this.token = new TokenApi(fetch);
    this.userpass = new UserPassApi(fetch);
  }
}
