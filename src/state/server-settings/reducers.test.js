import reducer, { initialState } from './reducers';
import * as actions from './actions';
import * as coreActions from '../core/core-actions';

describe('serverStatus reducers', () => {
  it('should set the loading attribute on opening settings', () => {
    const newState = reducer({}, actions.openSettings());
    expect(newState.loading).toBeTruthy();
  });
  it('should return the existing state on other actions', () => {
    const oldState = { state: 'a' };
    const newState = reducer(oldState, coreActions.clearError());
    expect(newState).toEqual(oldState);
  });
  it('should load the initial state when none is provided', () => {
    expect(reducer(undefined, coreActions.clearError())).toEqual(initialState);
  });
});
