import { vaultFetch } from '.';

export const health = () => (
  vaultFetch('/v1/sys/health?sealedcode=200')().then((resp) => {
    if (resp.status !== 200) {
      throw new Error('health check failed');
    }
    return resp;
  }).then(resp => resp.json())
);

export const sealStatus = () => (
  vaultFetch('/v1/sys/seal-status')().then(resp => resp.json())
);

export const unseal = key => (
  vaultFetch('/v1/sys/unseal', {
    method: 'PUT',
    body: JSON.stringify({ key }),
  })().then(resp => resp.json())
);

export const mounts = token => (
  vaultFetch('/v1/sys/mounts')(token)
    .then(resp => resp.json())
);
