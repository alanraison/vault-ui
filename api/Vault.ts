import { UrlSpec } from "./UrlSpec";
import { default as Sys, SysApi } from "./sys/SysApi";

export interface Vault {
  sys: SysApi;
  fetch: (url: UrlSpec, options: any) => Promise<Response>;
}

export default function Vault(vaultAddr: string, token: string) {
  return {
    sys: {},
    fetch: (url: UrlSpec, init: any) => {
      const headers = init && init.headers ? init.headers : new Headers();
      headers.set('X-Vault-Token', token);
      return fetch(url.prefixPath(vaultAddr).build(), {
        ...init,
        headers,
      });
    }
  } as Vault;
}