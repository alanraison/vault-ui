import { getSealStatus } from './';
import { url } from '../../core/api';

jest.mock('../../core/api');

const mockUrl = 'http://foo';
url.mockReturnValue(mockUrl);
const response = { testResult: 1 };

describe('getSealStatus', () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(response));
  });
  afterEach(() => {
    fetch.resetMocks();
  });
  it('should call the seal status API', () => {
    return getSealStatus().then(() => {
      expect(fetch).toHaveBeenCalled();

      const actualRequest = fetch.mock.calls[0][0];
      expect(actualRequest).toEqual(`${mockUrl}/v1/sys/seal-status`);
    });
  });
});
