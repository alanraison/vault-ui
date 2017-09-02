import * as actions from '.';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

describe('action creators', () => {
  tests.actionCreator('initialise', actions.INITIALISE, 'vault', { foo: 2 });
  tests.actionCreator('healthCheckStart', actions.HEALTH_CHECK_START);
  tests.actionCreator('healthCheckOk', actions.HEALTH_CHECK_OK);
  tests.actionCreator('clearError', actions.CLEAR_ERROR);
  tests.errorActionCreator('error', actions.ERROR);
});
