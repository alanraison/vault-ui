import { vaultAddr, vaultFetch } from '.';

describe.only('vaultFetch', () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify({ testResponse: 1 }));
  });
  afterEach(() => {
    fetch.resetMocks();
  });
  it('should call fetch using the base vaultAddr', () => (
    vaultFetch('/foo')('').then(() => {
      expect(fetch).toHaveBeenCalled();
      expect(fetch.mock.calls[0][0].url).toEqual(`${vaultAddr()}/foo`);
    })
  ));
  it('should set the vault token', () => (
    vaultFetch('/bar')('MY-TOKEN').then(() => {
      expect(fetch).toHaveBeenCalled();
      expect(fetch.mock.calls[0][0].headers.map['x-vault-token']).toEqual('MY-TOKEN');
    })
  ));
  it('should change the fetch method if a method option is specified', () => {
    vaultFetch('/baz', { method: 'PUT' })('MY-TOKEN').then(() => {
      expect(fetch).toHaveBeenCalled();
      expect(fetch.mock.calls[0][0].method).toEqual('PUT');
    });
  });
});
