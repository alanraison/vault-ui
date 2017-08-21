import token from '../methods/token/api';

export default (method, data) => {
  if (method === 'token') {
    return token(data);
  }
  return null;
};
