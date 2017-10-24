import reducer from './reducers';
import * as actions from './actions';

describe('serverStatus reducers', () => {
  it('should set the loading attribute on opening settings', () => {
    const newState = reducer({}, actions.openSettings());
    expect(newState.loading).toBeTruthy();
  });
});
