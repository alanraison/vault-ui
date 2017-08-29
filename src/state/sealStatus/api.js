import { url } from '../core/api';

export const getSealStatus = () => (
  fetch(`${url()}/v1/sys/seal-status`).then(resp => resp.json())
);

export const unseal = key => (
  fetch(`${url()}/v1/sys/unseal`, {
    method: 'PUT',
    body: JSON.stringify({ key }),
  }).then(resp => resp.json())
);
