import uuid from 'uuid/v4';
import { login } from './api';
import token from './methods/token/api';

jest.mock('./methods/token/api');

describe('Login handler', () => {
  describe('with token login', () => {
    it('should call the token handler', () => {
      const data = uuid();
      login('token', data);
      expect(token).toBeCalledWith(data);
    });
  });
});
