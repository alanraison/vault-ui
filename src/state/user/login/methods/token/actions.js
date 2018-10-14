// @flow
export type TokenData = string;

export type ChangeTokenAction = {
  type: 'vault-ui/login/token/CHANGE_TOKEN';
  +payload: {
    +token: TokenData,
  }
}
export const CHANGE_TOKEN = 'vault-ui/login/token/CHANGE_TOKEN';
export const changeToken = (token: TokenData): ChangeTokenAction => ({
  type: 'vault-ui/login/token/CHANGE_TOKEN',
  payload: { token },
});

export type TokenAction = ChangeTokenAction;
