import { vaultFetch } from '../';

export default token => (
  vaultFetch('/v1/auth/token/create', {
    method: 'POST',
  })(token).then(resp => resp.json())
);
