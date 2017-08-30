import token from './token';
import { vaultFetch } from '../';

jest.mock('../');

const response = { testResult: 1 };
const vaultFetchTokenMock = jest.fn();

describe('token login', () => {
  beforeEach(() => {
    vaultFetchTokenMock.mockReturnValue(Promise.resolve(new Response(JSON.stringify(response))));
    vaultFetch.mockReturnValue(vaultFetchTokenMock);
  });
  afterEach(() => {
    vaultFetch.mockReset();
    vaultFetchTokenMock.mockReset();
  });
  it('should call the create token api', () => {
    const expectedToken = 'the-token';
    return token(expectedToken).then(() => {
      expect(vaultFetch).toHaveBeenCalledWith('/v1/auth/token/create', { method: 'POST' });
      expect(vaultFetchTokenMock).toHaveBeenCalledWith(expectedToken);
    });
  });
});
