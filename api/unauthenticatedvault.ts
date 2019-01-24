import { UrlSpec } from './UrlSpec';
import { UnauthenticatedSysApi } from './sys/UnauthenticatedSysApi';


export interface UnauthenticatedVault {
  sys: UnauthenticatedSysApi;
  fetch: (url: UrlSpec, options: any) => Promise<Response>;
}
/**
 * UnauthenticatedVault
 */
export function UnauthenticatedVault(vaultAddr: string) {
  return {
    fetch(url: UrlSpec, options: any) {
      return fetch(url.prefixPath(vaultAddr).build(), options);
    }
  }
}