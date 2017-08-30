import uuid from 'uuid/v4';
import * as sys from './sys';
import { vaultFetch } from '.';

jest.mock('.');

const response = { testResponse: uuid() };
const vaultFetchTokenMock = jest.fn();

describe('The vault API', () => {
  beforeEach(() => {
    vaultFetch.mockReturnValue(vaultFetchTokenMock);
    vaultFetchTokenMock.mockReturnValue(Promise.resolve(
      new Response(JSON.stringify(response))));
  });
  afterEach(() => {
    vaultFetch.mockReset();
    vaultFetchTokenMock.mockReset();
  });

  describe('health', () => {
    it('should call the health API', () =>
      sys.health().then(() => {
        expect(vaultFetch).toHaveBeenCalledWith('/v1/sys/health?sealedcode=200');
        expect(vaultFetchTokenMock).toHaveBeenCalledWith();
      }));
  });

  describe('sealStatus', () => {
    it('should call the seal status API', () =>
      sys.sealStatus().then(() => {
        expect(vaultFetch).toHaveBeenCalledWith('/v1/sys/seal-status');
        expect(vaultFetchTokenMock).toHaveBeenCalledWith();
      }));
  });

  describe('unseal', () => {
    it('should make a PUT request to the unseal API', () => {
      const key = 'abcde';
      const body = JSON.stringify({ key });
      return sys.unseal(key).then(() => {
        expect(vaultFetch).toHaveBeenCalledWith('/v1/sys/unseal', { method: 'PUT', body });
        expect(vaultFetchTokenMock).toHaveBeenCalledWith();
      });
    });
  });

  describe('mounts', () => {
    it('should call the mounts API', () => {
      const token = 'foo';
      return sys.mounts(token).then(() => {
        expect(vaultFetch).toHaveBeenCalledWith('/v1/sys/mounts');
        expect(vaultFetchTokenMock).toHaveBeenCalledWith(token);
      });
    });
  });
});
