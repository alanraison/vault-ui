// @flow
export type OpenSettingsAction = {
  +type: 'vault-ui/admin/OPEN_SETTINGS',
};
export const OPEN_SETTINGS = 'vault-ui/admin/OPEN_SETTINGS';
export const openSettings = (): OpenSettingsAction => ({
  type: OPEN_SETTINGS,
});
export type EnableLoginMethodAction = {
  +type: 'vault-ui/admin/ENABLE_LOGIN_METHOD',
  +payload: {
    +method: string,
  },
};
export const ENABLE_LOGIN_METHOD = 'vault-ui/admin/ENABLE_LOGIN_METHOD';
export const enableLoginMethod = (method: string): EnableLoginMethodAction => ({
  type: ENABLE_LOGIN_METHOD,
  payload: {
    method,
  },
});
export type ServerSettingsAction =
  OpenSettingsAction |
  EnableLoginMethodAction;
