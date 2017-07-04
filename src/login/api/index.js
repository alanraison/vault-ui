import token from './token';

export const login = (method, data) => {
  if (method === 'token') {
    return token(data);
  }
}