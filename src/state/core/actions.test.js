import * as actions from './actions';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

describe('action creators', () => {
  tests.actionCreator('initialise', actions.INITIALISE, 'vault', { foo: 2 });
  tests.actionCreator('healthCheckRequest', actions.HEALTH_CHECK_REQUEST);
  tests.actionCreator('healthCheckResponse', actions.HEALTH_CHECK_RESPONSE);
  tests.actionCreator('clearError', actions.CLEAR_ERROR);
  tests.errorActionCreator('error', actions.ERROR);
});
