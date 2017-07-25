import { url } from '../../../../core/api';

export default (token) => (
  fetch(new Request(`${url()}/v1/auth/token/create`, {
    method: 'POST',
    headers: new Headers({
      'X-Vault-Token': token,
    }),
  })).then(
    resp => resp.json()
  )
)