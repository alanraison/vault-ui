import * as actions from '.';
import { testActionCreators } from '../../../../actions/actions';
import uuid from 'uuid/v4';

const tests = testActionCreators(actions);

describe('token actions', () => {
  tests.actionCreator('changeToken', actions.CHANGE_TOKEN, uuid());
})