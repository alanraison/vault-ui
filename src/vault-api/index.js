// @flow
import SysApi, { UnauthenticatedSysApi } from './sys';
import AuthApi from './auth';
import type UrlSpec from './url-spec';

const checkResponse = (response: Response): Promise<string> => {
  if (!response.ok) {
    return response.text().then((text) => {
      throw new Error(`received status code ${response.status}\n${text}`);
    });
  }
  return response.json().then((json) => {
    if (json.errors) {
      throw new Error(JSON.stringify(json));
    }
    return json;
  });
};

export class UnauthenticatedVault {
  vaultAddr: string;

  +sys: UnauthenticatedSysApi;

  constructor(vaultAddr: string) {
    this.vaultAddr = vaultAddr;
    this.sys = new UnauthenticatedSysApi(this.fetch);
  }

  fetch(url: UrlSpec, options: any) {
    return fetch(url.prefixPath(this.vaultAddr).build(), options).then(checkResponse);
  }
}

export default class Vault extends UnauthenticatedVault {
  token: string;

  auth: AuthApi;

  sys: SysApi;

  constructor(vaultAddr: string, token: string) {
    super(vaultAddr);
    this.token = token;
    this.sys = new SysApi(this.fetch);
    this.auth = new AuthApi(this.fetch);
  }

  fetch(url: UrlSpec, init: any) {
    const headers = init && init.headers ? init.headers : new Headers();
    headers.set('X-Vault-Token', this.token);
    return super.fetch(url, {
      ...init,
      headers,
    });
  }
}
