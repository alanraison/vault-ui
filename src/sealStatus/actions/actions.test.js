import uuid from 'uuid/v4';
import * as actions from '.';
import testActionCreators from '../../core/actions/actions';

const tests = testActionCreators(actions);

describe('sealStatus actionCreators', () => {
  [
    { method: 'getUnsealStatusStart', action: actions.GET_UNSEAL_STATUS_START },
    { method: 'getUnsealStatusResult', action: actions.GET_UNSEAL_STATUS_RESULT, payload: uuid() },
  ].map(({ method, action, payload }) => tests.actionCreator(method, action, payload));
});
