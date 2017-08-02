import { url } from '../../core/api';

export interface VaultSealed {
  sealed: boolean;
  t: number;
  n: number;
  progress: number;
  version: string;
}

export interface VaultUnsealed {
  sealed: boolean;
  t: number;
  n: number;
  progress: number;
  version: string;
  cluster_name: string;
  cluster_id: string;
}

export const unseal = (key: string): Promise<VaultSealed> | Promise<VaultUnsealed> => (
  fetch(`${url()}/v1/sys/unseal`, {
    method: 'PUT',
    body: JSON.stringify({key})
  }).then(resp => resp.json())
)