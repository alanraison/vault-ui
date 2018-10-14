import * as actions from './core-actions';
import testActionCreators from '../testhelper';

const {
  initialise,
  healthCheckRequest,
  healthCheckResponse,
  clearError,
  error,
} = actions;

const tests = testActionCreators({
  initialise,
  healthCheckRequest,
  healthCheckResponse,
  clearError,
  error,
});

describe('action creators', () => {
  tests.actionCreator('initialise', actions.INITIALISE, 'vault', { foo: 2 });
  tests.actionCreator('healthCheckRequest', actions.HEALTH_CHECK_REQUEST);
  tests.actionCreator('healthCheckResponse', actions.HEALTH_CHECK_RESPONSE, 'ok', true);
  tests.actionCreator('clearError', actions.CLEAR_ERROR);
  tests.errorActionCreator('error', actions.ERROR);
  describe('error action', () => {
    it('should set the error source', () => {
      const actual = error(new Error(), 'test source');
      expect(actual.payload.source).toEqual('test source');
    });
  });
});
