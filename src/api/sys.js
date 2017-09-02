/**
 * The Vault API calls under the /sys mount which do not require authentication
 */
export class UnauthenticatedSysApi {
  constructor(vault) {
    this.vault = vault;
  }
  get baseUrl() {
    return this.vault.baseUrl.prefix('/v1/sys');
  }
  fetch(url, init = {}) {
    return this.fetch(this.baseUrl.segment(url).toString(), init);
  }
  /**
   * Discover the health of the Vault server
   *
   * @see {@link https://www.vaultproject.io/api/system/health.html}
   *
   * @param options - health api options
   * @param {bool} options.standbyok - whether to return success if connecting to a server on
   *    standby
   * @param {int} options.activecode - status to return when active
   * @param {int} options.standbycode - status to return when a standby server
   * @param {int} options.sealedcode - status to return when sealed
   * @param {int} options.uninitcode - status to return when ininitialised
   */
  health(options = {}) {
    const url = this.baseUrl.segment('/health').query(options);
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
    return this.authFetch(this.baseUrl.segment('/mounts').toString());
  }
}
