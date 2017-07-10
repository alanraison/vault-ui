import * as actions from '.';
import { testActionCreators } from '../../actions/actions';
import uuid from 'uuid/v4';

const tests = testActionCreators(actions);

describe('unseal action creators', () => {
  [
    {method: 'editUnsealKey', action: actions.EDIT_UNSEAL_KEY},
    {method: 'startUnseal', action: actions.START_UNSEAL},
  ].map(({method, action}) => {
    tests.actionCreator(method, action, uuid());
  });
  tests.errorActionCreator('unsealError', actions.UNSEAL_ERROR);
});