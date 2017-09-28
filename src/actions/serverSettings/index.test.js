import * as actions from '.';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

describe('ServerSettings action creators', () => {
  [
    { method: 'enableUserPass', action: actions.ENABLE_USERPASS },
  ].map(({ method, action }) => tests.actionCreator(method, action));
});
