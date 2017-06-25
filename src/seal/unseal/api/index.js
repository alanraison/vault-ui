import { url } from '../../../api';

export const unseal = (key) => (
  fetch(`${url}/v1/sys/unseal`, {
    method: 'PUT',
    body: JSON.stringify({key})
  }).then(
    resp => resp.json()
  )
)