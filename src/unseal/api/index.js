import { url } from '../../core/api';

export default key => (
  fetch(`${url()}/v1/sys/unseal`, {
    method: 'PUT',
    body: JSON.stringify({ key }),
  }).then(resp => resp.json())
);
