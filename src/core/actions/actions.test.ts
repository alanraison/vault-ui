import * as actions from '.';
import {
  testActionCreators
} from './actions';

const tests = testActionCreators(actions);

describe('action creators', () => {
  tests.actionCreator('clearError', actions.CLEAR_ERROR, undefined);
  tests.errorActionCreator('error', actions.ERROR);
});