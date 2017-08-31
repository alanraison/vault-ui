export class UnauthenticatedSysApi {
  constructor(vault) {
    this.vault = vault;
    this.vault.sys = this;
  }
  get urlBuilder() {
    return this.vault.urlBuilder.prefix('/v1/sys');
  }
  fetch(url, init = {}) {
    return this.fetch(this.urlBuilder.segment(url).toString(), init);
  }
  /* options can be:
  {
    standbyok,
    activecode,
    standbycode,
    sealedcode,
    uninitcode,
  }
  */
  health(options = {}) {
    const url = this.urlBuilder.segment('/health').query(options);
    return fetch(url.toString());
  }
  sealStatus() {
    return this.fetch('/seal-status');
  }
  unseal(key) {
    return this.fetch('/unseal', {
      method: 'PUT',
      body: JSON.stringify({ key }),
    });
  }
}

export class SysApi extends UnauthenticatedSysApi {
  authFetch(url, init) {
    return this.vault.authFetch(url, init);
  }
  mounts() {
    return this.authFetch(this.urlBuilder.segment('/mounts').toString());
  }
}
