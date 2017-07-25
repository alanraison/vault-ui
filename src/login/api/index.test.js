import { login } from '.';
import token from '../methods/token/api';
import uuid from 'uuid/v4';

jest.mock('../methods/token/api');

describe('Login handler', () => {
  describe('with token login', () => {
    it('should call the token handler', () => {
      const data = uuid();
      login("token", data);
      expect(token).toBeCalledWith(data);
    });
  });
});