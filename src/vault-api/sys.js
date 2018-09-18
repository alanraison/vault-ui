// @flow
import UrlSpec from './url-spec';
import type Vault, { UnauthenticatedVault } from '.';
/**
 * The Vault API calls under the /sys mount which do not require authentication
 */
export class UnauthenticatedSysApi {
  +vault: UnauthenticatedVault;

  health: ({
    standbyok?: boolean,
    activecode?: number,
    sealedcode?: number,
    standbycode?: number,
  }) => Promise<string>;

  sealStatus: () => Promise<string>;

  unseal: ({
    key?: string,
    reset?: boolean,
  }) => Promise<string>;

  constructor(vault: UnauthenticatedVault) {
    this.vault = vault;
    this.health = this.health.bind(this);
    this.sealStatus = this.sealStatus.bind(this);
    this.unseal = this.unseal.bind(this);
  }

  fetch(url: UrlSpec, init: any) {
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
  health(options: {
    standbyok?: boolean,
    activecode?: number,
    sealedcode?: number,
    uninitcode?: number,
  }) {
    return this.fetch(new UrlSpec('/health', options));
  }

  /**
   * Discover whether the server is in a sealed state, and if so, how many keys are required to
   * unseal.
   *
   * @see {@link https://www.vaultproject.io/api/system/seal-status.html}
   */
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
  unseal({ key, reset }: { key?: string, reset?: boolean }) {
    return this.fetch(new UrlSpec('/unseal'), {
      method: 'PUT',
      body: JSON.stringify({ key, reset }),
    });
  }
}

/**
 * The System API containing all authenticated requests.
 */
export default class SysApi extends UnauthenticatedSysApi {
  mounts: () => Promise<string>;

  policies: () => Promise<string>;

  policy: (p: string) => Promise<string>;

  vault: Vault;

  constructor(vault: Vault) {
    super(vault);
    this.mounts = this.mounts.bind(this);
    this.policies = this.policies.bind(this);
    this.policy = this.policy.bind(this);
  }

  /**
   * Discover all the vault mounts
   *
   * @see {@link https://www.vaultproject.io/api/system/mounts.html}
   */
  mounts() {
    return this.fetch(new UrlSpec('/mounts'));
  }

  /**
   * Discover all policies available
   *
   * @see {@link https://www.vaultproject.io/api/system/policy.html}
   */
  policies() {
    return this.fetch(new UrlSpec('/policy'));
  }

  /**
   * Look up a named policy
   */
  policy(name: string) {
    return this.fetch(new UrlSpec(`/policy/${name}`));
  }
}
