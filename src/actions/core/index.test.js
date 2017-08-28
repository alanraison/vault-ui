import * as actions from '.';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

describe('action creators', () => {
  tests.actionCreator('clearError', actions.CLEAR_ERROR);
  tests.errorActionCreator('error', actions.ERROR);
});
