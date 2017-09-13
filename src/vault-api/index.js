import Sys, { UnauthenticatedSysApi } from './sys';
import AuthApi from './auth';

const checkResponse = (response) => {
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
  constructor(vaultAddr) {
    this.vaultAddr = vaultAddr;
    this.sys = new UnauthenticatedSysApi(this);
  }
  fetch(url, options) {
    return fetch(url.prefixPath(this.vaultAddr).build(), options).then(checkResponse);
  }
}

export default class Vault extends UnauthenticatedVault {
  constructor(vaultAddr, token) {
    super(vaultAddr);
    this.token = token;
    this.sys = new Sys(this);
    this.auth = new AuthApi(this);
  }

  fetch(url, init) {
    const headers = init && init.headers ? init.headers : new Headers();
    headers.set('X-Vault-Token', this.token);
    return super.fetch(url, {
      ...init,
      headers,
    });
  }
}
