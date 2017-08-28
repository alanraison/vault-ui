import reducer from './';
import * as actions from '../../../../../actions/authMethods/token';

describe('Token login method reducer', () => {
  it('should set the token data on CHANGE_TOKEN', () => {
    const newState = reducer('foo', actions.changeToken('bar'));
    expect(newState).toEqual('bar');
  });
  it('should ignore other actions', () => {
    const newState = reducer('foo', { type: 'EDIT_TOKEN', payload: 'baz' });
    expect(newState).toEqual('foo');
  });
});
