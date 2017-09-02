import Vault, { UnauthenticatedVault } from '../api/vault';

export default class VaultUI {
  constructor(addr) {
    this.uaVault = new UnauthenticatedVault(addr);
    this.health = this.health.bind(this);
  }
  health() {
    return this.uaVault.sys.health({ sealedcode: 200 }).then((resp) => {
      if (resp.status !== 200) {
        throw new Error(`connecting to vault (received response ${resp.status})`);
      }
      return resp;
    }).then(resp => resp.json());
  }
}
