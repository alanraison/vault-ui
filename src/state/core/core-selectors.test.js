import * as selectors from './core-selectors';

describe('Core selectors', () => {
  describe('getAppState', () => {
    it('should get the app property from the root state', () => {
      expect(selectors.getAppState({ app: 'foo', other: 'bar' })).toEqual('foo');
    });
  });
});
