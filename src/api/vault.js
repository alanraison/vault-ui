import UrlAssembler from 'url-assembler';
import Sys, { UnauthenticatedSysApi } from './sys';

export class UnauthenticatedVault {
  constructor(vaultAddr) {
    this.vaultAddr = vaultAddr;
    this.sys = new UnauthenticatedSysApi(this);
  }
  get baseUrl() {
    return new UrlAssembler(this.vaultAddr);
  }
}

export default class Vault extends UnauthenticatedVault {
  constructor(vaultAddr, token) {
    super(vaultAddr);
    this.token = token;
  }

  authFetch(url, init) {
    const headers = init && init.headers ? init.headers : new Headers();
    headers.set('X-Vault-Token', this.token);
    return fetch(url, {
      ...init,
      headers,
    });
  }
}
