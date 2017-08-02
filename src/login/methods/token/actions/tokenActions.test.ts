import * as actions from '.';
import { testActionCreators } from '../../../../core/actions/actions';
import * as uuid from 'uuid/v4';

const tests = testActionCreators(actions);

describe('token actions', () => {
  tests.actionCreator('changeToken', actions.CHANGE_TOKEN, uuid());
});