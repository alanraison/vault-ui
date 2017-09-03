import Sys, { UnauthenticatedSysApi } from './sys';

export class UnauthenticatedVault {
  constructor(vaultAddr) {
    this.vaultAddr = vaultAddr;
    this.sys = new UnauthenticatedSysApi(this);
    // this.fetch = this.fetch.bind(this);
  }
  fetch(url, init = {}) {
    return fetch(url.prefixPath(this.vaultAddr).build(), init);
  }
}

export default class Vault extends UnauthenticatedVault {
  constructor(vaultAddr, token) {
    super(vaultAddr);
    this.token = token;
    this.fetch = this.fetch.bind(this);
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
