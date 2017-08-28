import reducer from './reducers';
import * as actions from '../../actions/unseal';

describe('the unseal reducer', () => {
  it('should set the unseal key when an EDIT_UNSEAL_KEY action is received', () => {
    const newState = reducer('', actions.editUnsealKey('foo'));
    expect(newState).toEqual('foo');
  });
  it('should leave the state unchanged on all other actions', () => {
    const newState = reducer('foo', { type: 'ANY_OLD_ACTION', data: 'bar' });
    expect(newState).toEqual('foo');
  });
});
