import * as actions from '.';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

describe('action creators', () => {
  [
    { method: 'settings', action: actions.SETTINGS },
  ].map(({ method, action }) => tests.actionCreator(method, action));
});
