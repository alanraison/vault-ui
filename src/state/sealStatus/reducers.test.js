import reducer from './reducers';
import actions from '../../actions';

describe('Seal Status reducer', () => {
  it('should start loading on GET_UNSEAL_STATUS_START', () => {
    const oldState = {
      foo: 'bar',
    };
    const newState = reducer(oldState, actions.sealStatus.getUnsealStatusStart());
    expect(newState).toEqual({ ...oldState, loading: true });
  });
  it('should finish loading when UNSEAL_STATUS_UPDATED', () => {
    const newState = reducer({ loading: true }, actions.sealStatus.getUnsealStatusResult({}));
    expect(newState.loading).toBeFalsy();
  });
  it('should set the unseal status when UNSEAL_STATUS_UPDATED', () => {
    const unsealStatus = {
      test: true,
      foo: 'bar',
    };
    const newState = reducer({}, actions.sealStatus.getUnsealStatusResult(unsealStatus));
    expect(newState).toEqual({ sealInfo: unsealStatus, loading: false });
  });
  it('should stop loading on ERROR', () => {
    const newState = reducer({ loading: true }, actions.error(new Error('test', 'test')));
    expect(newState.loading).toBeFalsy();
  });
  it('should set the unseal key when an EDIT_UNSEAL_KEY action is received', () => {
    const newState = reducer('', actions.sealStatus.editUnsealKey('foo'));
    expect(newState.unsealKey).toEqual('foo');
  });
  it('should not respond to other actions', () => {
    const oldState = { foo: 'bar' };
    const newState = reducer(oldState, { type: 'INTERNAL_ACTION', payload: 'baz' });
    expect(newState).toEqual(oldState);
  });
});
