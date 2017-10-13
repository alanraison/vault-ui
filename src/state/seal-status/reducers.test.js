import reducer from './reducers';
import actions from '../../actions';

describe('Seal Status reducer', () => {
  it('should start loading on GET_UNSEAL_STATUS_START', () => {
    const oldState = {
      foo: 'bar',
    };
    const newState = reducer(oldState, actions.sealStatus.unsealStatusRequest());
    expect(newState).toEqual({ ...oldState, loading: true });
  });
  it('should finish loading when UNSEAL_STATUS_RESPONSE', () => {
    const newState = reducer({ loading: true }, actions.sealStatus.unsealStatusResponse({}));
    expect(newState.loading).toBeFalsy();
  });
  it('should set the unseal status when UNSEAL_STATUS_RESPONSE', () => {
    const unsealStatus = {
      test: true,
      foo: 'bar',
    };
    const newState = reducer({}, actions.sealStatus.unsealStatusResponse(unsealStatus));
    expect(newState).toEqual({ sealInfo: unsealStatus, loading: false });
  });
  it('should stop loading on ERROR', () => {
    const newState = reducer({ loading: true }, actions.error(new Error('test', 'test')));
    expect(newState.loading).toBeFalsy();
  });
  it('should set sealed flag when UNSEAL_KEY_REQUIRED', () => {
    const newState = reducer(undefined, actions.sealStatus.unsealKeyRequired());
    expect(newState.sealed).toBeTruthy();
  });
  it('should update the unseal key on EDIT_UNSEAL_KEY', () => {
    const newState = reducer({ unsealKey: 'a' }, actions.sealStatus.editUnsealKey('bcd'));
    expect(newState.unsealKey).toEqual('bcd');
  });
  it('should clear sealed flag when UNSEAL_COMPLETE', () => {
    const newState = reducer({ sealed: true }, actions.sealStatus.unsealComplete());
    expect(newState.sealed).toBeFalsy();
  });
  it('should clear the unseal key when UNSEAL_COMPLETE', () => {
    const newState = reducer({ unsealKey: 'foo-bar-baz' }, actions.sealStatus.unsealComplete());
    expect(newState.unsealKey).toBeFalsy();
  });
  it('should not respond to other actions', () => {
    const oldState = { foo: 'bar' };
    const newState = reducer(oldState, { type: 'INTERNAL_ACTION', payload: 'baz' });
    expect(newState).toEqual(oldState);
  });
});
