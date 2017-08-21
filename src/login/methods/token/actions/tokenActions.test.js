import uuid from 'uuid/v4';
import * as actions from '.';
import { testActionCreators } from '../../../../core/actions/actions';

const tests = testActionCreators(actions);

describe('token actions', () => {
  tests.actionCreator('changeToken', actions.CHANGE_TOKEN, uuid());
});
