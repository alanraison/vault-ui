import { login } from './sagas';
import * as actions from '../../actions/login';

describe('login saga handler', () => {
  it('should get the state for the selected login handler', () => {
    const gen = login(actions.loginStart('myMethod'));
    const next = gen.next().value;
    expect(next).toHaveProperty('SELECT');
  });
});
