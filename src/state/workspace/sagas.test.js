
import { runSaga } from 'redux-saga';
import { initialise } from './sagas';
import { getVault } from '../core/core-selectors';

jest.mock('../core/core-selectors');

xdescribe('Workspace Sagas', () => {
  describe('initialise', () => {
    let result;
    beforeEach(async () => {
      getVault.mockImplementation(function mock() {
        this.sys = jest.fn();
      });
      result = await runSaga({
        getState: getVault,
      }, initialise).done;
    });

    afterEach(() => {
      getVault.mockReset();
    });

    it("should look up all the user's policies", () => {
      expect();
    });

    it('should resolve all the routes that the user has access to', () => {
      gen.next();
      const policies = jest.fn();
      gen.next({ sys: { policies } });
    });
  });
});
