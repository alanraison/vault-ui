import token from './token';
import { url } from '../../api';

jest.mock('../../api');

const mockUrl = "http://foo";
url.mockReturnValue(mockUrl);
const response = { testResult: 1 };

describe('token login', () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(response));
  });
  afterEach(() => {
    fetch.resetMocks();
  });
  it('should call the create token api', () => {
    const expectedToken = "the-token";
    return token(expectedToken).then((res) => {
      expect(fetch).toHaveBeenCalled();

      const actualRequest = fetch.mock.calls[0][0];
      expect(actualRequest.url).toEqual(`${mockUrl}/v1/auth/token/create`);
      expect(actualRequest.headers.map["x-vault-token"]).toEqual(expectedToken);

      expect(res).toEqual(response);
    });
  });
});