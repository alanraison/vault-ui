import uuid from 'uuid/v4';
import * as selectors from './selectors';
import { getAppState } from '../core/selectors';

jest.mock('../core/selectors');

describe('serverSettings selectors', () => {
  describe('getServerSettings', () => {
    it('must get the server settings', () => {
      const returnedUuid = uuid();
      const testState = { value: uuid() };
      getAppState.mockReturnValue({ serverSettings: returnedUuid });
      expect(selectors.getServerSettings(testState)).toEqual(returnedUuid);
      expect(getAppState).toHaveBeenCalledWith(testState);
    });
  });
});
