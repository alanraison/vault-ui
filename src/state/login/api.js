import token from './methods/token/api';

export const login = (method, data) => {
  if (method === 'token') {
    return token(data);
  }
  return null;
};

export default {};
