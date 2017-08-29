import uuid from 'uuid/v4';
import { getSealStatus, unseal } from './api';
import { url } from '../core/api';

jest.mock('../core/api');

const mockUrl = 'http://foo';
url.mockReturnValue(mockUrl);
const response = { testResponse: uuid() };

describe('getSealStatus', () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(response));
  });
  afterEach(() => {
    fetch.resetMocks();
  });
  it('should call the seal status API', () =>
    getSealStatus().then(() => {
      expect(fetch).toHaveBeenCalled();

      const actualRequest = fetch.mock.calls[0][0];
      expect(actualRequest).toEqual(`${mockUrl}/v1/sys/seal-status`);
    }));
});


describe('unseal api', () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(response));
  });
  afterEach(() => {
    fetch.resetMocks();
  });
  it('should make a PUT request to the unseal API', () => {
    const key = 'abcde';
    return unseal(key).then((resp) => {
      expect(fetch).toHaveBeenCalled();

      const actualUrl = fetch.mock.calls[0][0];
      const actualOptions = fetch.mock.calls[0][1];
      expect(actualUrl).toEqual(`${mockUrl}/v1/sys/unseal`);
      expect(actualOptions.method).toEqual('PUT');

      expect(resp).toEqual(response);
    });
  });
});
