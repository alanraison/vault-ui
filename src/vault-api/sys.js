import UrlSpec from './url-spec';
/**
 * The Vault API calls under the /sys mount which do not require authentication
 */
export class UnauthenticatedSysApi {
  constructor(vault) {
    this.vault = vault;
    this.health = this.health.bind(this);
    this.sealStatus = this.sealStatus.bind(this);
    this.unseal = this.unseal.bind(this);
  }
  fetch(url, init) {
    return this.vault.fetch(url.prefixPath('/v1/sys'), init);
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
  health(options) {
    return this.fetch(new UrlSpec('/health', options));
  }
  sealStatus() {
    return this.fetch(new UrlSpec('/seal-status'));
  }
  /**
   * Unseal Vault, or reset the unseal progress
   *
   * @see {@link https://www.vaultproject.io/api/system/unseal.html}
   *
   * @param options - unseal options
   * @param {string} options.key - the unseal key to use
   * @param {bool} options.reset - true if the unseal process is to be reset
   */
  unseal({ key, reset }) {
    return this.fetch(new UrlSpec('/unseal'), {
      method: 'PUT',
      body: JSON.stringify({ key, reset }),
    });
  }
}

export default class SysApi extends UnauthenticatedSysApi {
  constructor(vault) {
    super(vault);
    this.mounts.bind(this);
  }
  mounts() {
    return this.fetch(new UrlSpec('/mounts'));
  }
}
