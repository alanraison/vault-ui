import uuid from 'uuid/v4';
import { login } from '.';
import token from './token';

jest.mock('./token');

describe('Login handler', () => {
  describe('with token login', () => {
    it('should call the token handler', () => {
      const data = uuid();
      login('token', data);
      expect(token).toBeCalledWith(data);
    });
  });
});
