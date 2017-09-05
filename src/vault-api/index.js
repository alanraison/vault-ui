import Sys, { UnauthenticatedSysApi } from './sys';
import AuthApi from './auth';

export class UnauthenticatedVault {
  constructor(vaultAddr) {
    this.vaultAddr = vaultAddr;
    this.sys = new UnauthenticatedSysApi(this);
  }
  fetch(url, init = {}) {
    return fetch(url.prefixPath(this.vaultAddr).build(), init);
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

/* eslint no-confusing-arrow: off */
const isStatusOk = (status, okCodes) =>
  Array.isArray(okCodes) ? okCodes.includes(status) : okCodes === status;

export function checkResponse(response, okCodes) {
  if (!isStatusOk(response.status, okCodes)) {
    response.text().then(console.log);
    throw new Error(`received status code ${response.status}`);
  }
  return response.json().then((json) => {
    if (json.errors) {
      throw new Error(JSON.stringify(json));
    }
    return json;
  });
}
