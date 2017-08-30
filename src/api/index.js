import * as auth from './auth';
import * as sys from './sys';

export const vaultAddr = () => 'http://localhost:3000';

export const vaultFetch = (url, options = {}) => (token) => {
  const headers = new Headers({
    'x-vault-token': token,
  });
  return fetch(new Request(`${vaultAddr()}${url}`, {
    ...options,
    headers,
  }));
};

export {
  auth,
  sys,
};
