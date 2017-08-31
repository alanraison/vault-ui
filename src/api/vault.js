import UrlAssembler from 'url-assembler';

export class UnauthenticatedVault {
  constructor(vaultAddr) {
    this.vaultAddr = vaultAddr;
  }
  get urlBuilder() {
    return new UrlAssembler(this.vaultAddr);
  }
}

class Vault extends UnauthenticatedVault {
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

export default Vault;
