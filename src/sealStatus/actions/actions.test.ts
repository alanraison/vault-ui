import * as actions from '.';
import { testActionCreators } from '../../core/actions/actions';
import * as uuid from 'uuid/v4';

const tests = testActionCreators(actions);

describe('sealStatus actionCreators', () => {
  [
    {method: 'getUnsealStatusStart', action: actions.GET_UNSEAL_STATUS_START, data: undefined},
    {method: 'unsealStatusUpdated', action: actions.UNSEAL_STATUS_UPDATED, data: uuid()},
  ].map(({method, action, data}) => {
    tests.actionCreator(method, action, data);
  });
})