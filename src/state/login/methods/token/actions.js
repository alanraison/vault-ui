// @flow
export type ChangeTokenAction = {
  type: 'vault-ui/login/token/CHANGE_TOKEN';
  +payload: {
    +token: any,
  }
}
export const CHANGE_TOKEN = 'vault-ui/login/token/CHANGE_TOKEN';
export const changeToken = (token: any): ChangeTokenAction => ({
  type: 'vault-ui/login/token/CHANGE_TOKEN',
  payload: { token },
});

export type TokenAction = ChangeTokenAction;
