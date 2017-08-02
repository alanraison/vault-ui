import reducer, { StoreState } from './';
import * as actions from '../actions';

describe('Seal Status reducer', () => {
  it('should start loading on GET_UNSEAL_STATUS_START', () => {
    const oldState: StoreState = {
      sealed: true,
      loading: null,
    };
    const newState = reducer(oldState, actions.getUnsealStatusStart());
    expect(newState).toEqual({...oldState, loading: true});
  });
  it('should finish loading when UNSEAL_STATUS_UPDATED', () => {
    const newState = reducer({loading: true, sealed: null}, actions.unsealStatusUpdated({}));
    expect(newState.loading).toBeFalsy();
  });
  it('should set the unseal status when UNSEAL_STATUS_UPDATED', () => {
    const unsealStatus = {
      test: true,
      foo: "bar"
    };
    const newState = reducer({loading:null,sealed:null}, actions.unsealStatusUpdated(unsealStatus));
    expect(newState).toEqual({...unsealStatus, loading: false});
  });
  it('should stop loading on ERROR', () => {
    const newState = reducer({loading: true,sealed:null}, actions.error(new Error("test"), "test"));
    expect(newState.loading).toBeFalsy();
  });
  it('should not respond to other actions', () => {
    const oldState = {loading: null, sealed: null};
    const newState = reducer(oldState, { type: "INTERNAL_ACTION", data: "baz" });
    expect(newState).toEqual(oldState);
  });
});