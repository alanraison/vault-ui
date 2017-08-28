import uuid from 'uuid/v4';
import * as actions from './token';
import testActionCreators from '../testhelper';

const tests = testActionCreators(actions);

describe('token actions', () => {
  tests.actionCreator('changeToken', actions.CHANGE_TOKEN, uuid());
});
