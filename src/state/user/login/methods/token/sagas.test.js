import { runSaga } from 'redux-saga';
import Vault from '../../../../../vault-api';
import tokenSaga from './sagas';

jest.mock('../../../../../vault-api');

describe('token login saga', () => {
  const token = 'fake-token';
  let result;
  beforeEach(async () => {
    const vault = { vaultAddr: 'http://vault' };
    Vault.mockImplementation(function mock(addr, tok) {
      this.addr = addr;
      this.token = tok;
      this.auth = { token: { create: jest.fn(() => Promise.resolve({ auth: { client_token: 'child-token' } })) } };
    });
    result = await runSaga({}, tokenSaga, vault, { loginData: token }).done;
  });
  afterEach(() => {
    Vault.mockReset();
  });

  it('logs in with the given token', () => {
    expect(Vault.mock.instances[0].token).toEqual(token);
  });
  it('creates a new child token', () => {
    expect(Vault.mock.instances[0].auth.token.create).toHaveBeenCalled();
  });
  it('returns a new Vault with the child token', () => {
    expect(Vault.mock.instances).toHaveLength(2);
    expect(Vault.mock.instances[1].token).toEqual('child-token');
    expect(result.addr).toEqual('http://vault');
    expect(result.token).toEqual('child-token');
  });
});
