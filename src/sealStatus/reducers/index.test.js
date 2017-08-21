import reducer from './';
import * as actions from '../actions';

describe('Seal Status reducer', () => {
  it('should start loading on GET_UNSEAL_STATUS_START', () => {
    const oldState = {
      foo: 'bar',
    };
    const newState = reducer(oldState, actions.getUnsealStatusStart());
    expect(newState).toEqual({ ...oldState, loading: true });
  });
  it('should finish loading when UNSEAL_STATUS_UPDATED', () => {
    const newState = reducer({ loading: true }, actions.unsealStatusUpdated({}));
    expect(newState.loading).toBeFalsy();
  });
  it('should set the unseal status when UNSEAL_STATUS_UPDATED', () => {
    const unsealStatus = {
      test: true,
      foo: 'bar',
    };
    const newState = reducer({}, actions.unsealStatusUpdated(unsealStatus));
    expect(newState).toEqual({ ...unsealStatus, loading: false });
  });
  it('should stop loading on ERROR', () => {
    const newState = reducer({ loading: true }, actions.error(new Error('test', 'test')));
    expect(newState.loading).toBeFalsy();
  });
  it('should not respond to other actions', () => {
    const oldState = { foo: 'bar' };
    const newState = reducer(oldState, { type: 'INTERNAL_ACTION', data: 'baz' });
    expect(newState).toEqual(oldState);
  });
});
